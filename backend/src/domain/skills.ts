export interface Skill {
    id?: number;
    name: string;
    level?: number;
    icon_url: string;
}

export interface ISkillRepository {
    findAll():Promise<Skill[]>
}