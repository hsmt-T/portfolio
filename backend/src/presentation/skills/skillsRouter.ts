import { Hono } from "hono";
import { skillsControler } from "./skillsController";
import { Env } from "../../types/env";

const skillsRouter = new Hono<Env>();

skillsRouter.get("/", skillsControler);

export default skillsRouter;