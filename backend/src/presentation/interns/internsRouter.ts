import { Hono } from "hono";
import { internsControler } from "./internsController";
import { Env } from "../../types/env";

const internsRouter = new Hono<Env>();

internsRouter.get("/", internsControler);

export default internsRouter;