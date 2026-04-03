import { Skill } from "./skills";

export interface Work {
    id?: number;
    title: string;
    description: string;
    role: string;
    prize?: string;
    github_url?: string;
    img_url?: string;
}

export type WorkWithSkills = Work & {
    skills: Skill[];
};

export interface IWorkRepository {
    findAll():Promise<WorkWithSkills[]>
}