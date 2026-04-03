import { Skill,ISkillRepository } from "../../domain/skills";

export class FindAllSkills {
    constructor(private skillRepo: ISkillRepository) {}

    async execute():Promise<Skill[]> {
        return await this.skillRepo.findAll()
    }
}