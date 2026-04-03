import type { WorkResponse } from "./worksResponse";

export const workPresenter = (w: any): WorkResponse => ({
    id: w.id!,
    title: w.title,
    description: w.description,
    role: w.role,
    prize: w.prize,
    github_url: w.github_url,
    img_url: w.img_url,
    skills: w.skills.map((s: any) => ({
        id: s.id!,
        name: s.name,
        icon_url: s.icon_url,
    })),
});