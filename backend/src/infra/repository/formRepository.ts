import { Form, IFormRepository } from "../../domain/form";

export class D1FormRepository implements IFormRepository {
    constructor(private db: D1Database) {}

    async create(form: Form): Promise<void> {
        const query = `
            INSERT INTO form (name, email, message, created_at)
            VALUES (?, ?, ?, datetime('now'))
        `;

        await this.db.prepare(query).bind(form.name, form.email, form.message).run();
    }
}