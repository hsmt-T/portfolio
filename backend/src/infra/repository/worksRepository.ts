import { Work, IWorkRepository } from "../../domain/works";

export class D1WorksRepository implements IWorkRepository {
    constructor(private db: D1Database) {}

    async findAll(): Promise<void> {
        const query = `
            SELECT * FROM works
        `;
        await this.db.prepare(query).run();
    }
}