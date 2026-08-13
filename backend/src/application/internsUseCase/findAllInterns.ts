import { Intern, IInternRepository } from "../../domain/interns";

export class FindAllInterns {
    constructor(private internRepo: IInternRepository) {}
    async execute():Promise<Intern[]> {
        return await this.internRepo.findAll()
    }
}