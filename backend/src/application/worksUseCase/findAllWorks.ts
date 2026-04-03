import { IWorkRepository, WorkWithSkills } from "../../domain/works";

export class FindAllWorks {
    constructor(private repo: IWorkRepository) {}

    async execute(): Promise<WorkWithSkills[]> {
        return await this.repo.findAll();
    }
}