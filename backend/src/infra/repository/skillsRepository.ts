import { Skill, ISkillRepository } from "../../domain/skills";

export class D1SkillsRepository implements ISkillRepository {
    constructor(private db: D1Database) {}

    async findAll(): Promise<Skill[]> {
        const query = `
            SELECT * FROM skills
        `;

        const result = await this.db.prepare(query).all<Skill>();
        return result.results;
    }
}