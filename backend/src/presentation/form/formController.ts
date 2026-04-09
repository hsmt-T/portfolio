import { Context } from "hono";
import { CreateForm } from "../../application/formUseCase/createForm";
import { D1FormRepository } from "../../infra/repository/formRepository";
import { CreateFormRequest } from "../../types/form"; "../../types/form"
import { Env } from "../../types/env";

export const formController = async (c: Context<{ Bindings: Env["Bindings"] }>) => {
    try {
        const body = await c.req.json<CreateFormRequest>();

        const name = body.name;
        const email = body.email ?? "";
        const message = body.message;

        if (!name || !message) {
            return c.json({ error: "必須項目が不足しています" }, 400);
        }

        const repo = new D1FormRepository(c.env.DB);

        const useCase = new CreateForm(repo);

        await useCase.execute({ name, email, message });

        return c.json({ message: "送信成功" }, 201);

    } catch (e) {
        console.error(e);
        return c.json({ error: "サーバーエラー" }, 500);
    }
};