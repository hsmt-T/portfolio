import { Hono } from "hono";
import { formController } from "./formController";
import { Env } from "../../types/env";

const formRouter = new Hono<Env>();

formRouter.post("/", formController);

export default formRouter;