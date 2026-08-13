import { Intern, IInternRepository } from "../../domain/interns";

export class D1InternsRepository implements IInternRepository {
    constructor(private db: D1Database) {}

    async findAll(): Promise<Intern[]> {
        const query = `
                    SELECT * FROM interns
                `;
        
                const result = await this.db.prepare(query).all<Intern>();
                return result.results;
    }
}