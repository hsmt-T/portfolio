import { Work } from "../../domain/works";
import { Skill } from "../../domain/skills";

export type WorkResponse = Work & {
    skills: Skill[];
};