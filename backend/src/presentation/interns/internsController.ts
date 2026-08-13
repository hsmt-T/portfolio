import { Context } from "hono";
import { FindAllInterns } from "../../application/internsUseCase/findAllInterns"; 
import { D1InternsRepository } from "../../infra/repository/internsRepository";
import { Env } from "../../types/env";

export const internsControler =async (c: Context<{Bindings: Env["Bindings"]}>) => {
    try {
        const repo = new D1InternsRepository(c.env.DB);
        const uc = new FindAllInterns(repo)
        const result = await uc.execute();
        return c.json(result, 200)
    } catch (e) {
        console.error(e);
        return c.json({ error: "サーバーエラー"}, 500)
    }
}