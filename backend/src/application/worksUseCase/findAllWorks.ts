import { Work, IWorkRepository } from "../../domain/works";

export class FindAllWorks {
    constructor(private workRepo: IWorkRepository) {}

    async execute():Promise<void> {
        await this.workRepo.findAll()
    }
}