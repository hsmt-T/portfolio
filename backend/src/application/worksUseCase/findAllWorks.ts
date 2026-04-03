import { IWorkRepository, Work } from "../../domain/works";

export class FindAllWorks {
    constructor(private workRepo: IWorkRepository) {}

    async execute():Promise<Work[]> {
        return await this.workRepo.findAll()
    }
}