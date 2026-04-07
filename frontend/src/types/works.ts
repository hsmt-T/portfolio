export type Skill = {
    id: number;
    name: string;
    icon_url: string;
};

export type Work = {
    id: number;
    title: string;
    description: string;
    role: string;
    prize?: string;
    github_url?: string;
    img_url?: string;
    skills: Skill[];
};