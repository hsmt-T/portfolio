import { IWorkRepository, WorkWithSkills } from "../../domain/works";

type WorkRow = {
    work_id: number;
    title: string;
    description: string;
    role: string;
    prize?: string;
    github_url?: string;
    img_url?: string;
    skill_id?: number;
    skill_name?: string;
    icon_url?: string;
};

export class D1WorksRepository implements IWorkRepository {
    constructor(private db: D1Database) {}

    async findAll(): Promise<WorkWithSkills[]> {
        const query = `
            SELECT
                w.id as work_id,
                w.title,
                w.description,
                w.role,
                w.prize,
                w.github_url,
                w.img_url,
                s.id as skill_id,
                s.name as skill_name,
                s.icon_url
            FROM works w
            LEFT JOIN work_skills ws ON w.id = ws.work_id
            LEFT JOIN skills s ON ws.skill_id = s.id
            ORDER BY w.id
        `;

        const result = await this.db.prepare(query).all<WorkRow>();

        const map = new Map<number, WorkWithSkills>();

        for (const row of result.results) {
        if (!map.has(row.work_id)) {
            map.set(row.work_id, {
            id: row.work_id,
            title: row.title,
            description: row.description,
            role: row.role,
            prize: row.prize,
            github_url: row.github_url,
            img_url: row.img_url,
            skills: [],
            });
        }

        if (row.skill_id) {
            map.get(row.work_id)!.skills.push({
            id: row.skill_id,
            name: row.skill_name!,
            icon_url: row.icon_url!,
            });
        }
        }

        return Array.from(map.values());
    }
}