import { Context } from "hono";
import { FindAllWorks } from "../../application/worksUseCase/findAllWorks";
import { D1WorksRepository } from "../../infra/repository/worksRepository";
import { Env } from "../../types/env";
import { workPresenter } from "./workPresenter";

export const worksControler = async (c: Context<{Bindings: Env["Bindings"]}>) => {
    try {
        const repo = new D1WorksRepository(c.env.DB);
        const useCase = new FindAllWorks(repo);
        const works = await useCase.execute();
        const result = works.map(workPresenter);
        return c.json(result, 200)
    } catch (e) {
        console.error(e);
        return c.json({ error: "サーバーエラー"}, 500)
    }
}

