import { Form, IFormRepository } from "../../domain/form";

export class CreateForm {
    constructor(private formRepo: IFormRepository) {}

    async execute(data: { name: string; email: string; message: string }): Promise<void> {

        if ( data.email && !data.email.includes("@")) {
            throw new Error("メール形式が不正");
        }

        const newForm: Form = {
        name: data.name,
        email: data.email,
        message: data.message,
        };

        await this.formRepo.create(newForm);
    }
}