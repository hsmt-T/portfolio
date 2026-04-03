import { Context } from "hono";
import { FindAllSkills } from "../../application/skillsUseCase/findAllSkills";
import { D1SkillsRepository } from "../../infra/repository/skillsRepository";
import { Env } from "../../types/env";

export const skillsControler = async (c: Context<{Bindings: Env["Bindings"]}>) => {
    try {
        const repo = new D1SkillsRepository(c.env.DB);
        const useCase = new FindAllSkills(repo);
        const result = await useCase.execute();
        return c.json(result, 200)
    } catch (e) {
        console.error(e);
        return c.json({ error: "サーバーエラー"}, 500)
    }
}

