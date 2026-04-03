import { Work, IWorkRepository } from "../../domain/works";

export class D1WorksRepository implements IWorkRepository {
    constructor(private db: D1Database) {}

    async findAll(): Promise<Work[]> {
        const query = `
            SELECT * FROM works
        `;
        const result = await this.db.prepare(query).all<Work>();
        return result.results;
    }
}