export interface Work {
    id?: number;
    title: string;
    descrription: string;
    role: string;
    prize?: string;
    github_url?: string;
    img_url?: string;
}

export interface IWorkRepository {
    findAll():Promise<void>
}