import { Hono } from "hono";
import { worksControler } from "./worksController";
import { Env } from "../../types/env";

const worksRouter = new Hono<Env>();

worksRouter.get("/", worksControler);

export default worksRouter;