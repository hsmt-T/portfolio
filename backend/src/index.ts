import { Hono } from 'hono'
import { cors } from "hono/cors";
import { Env } from "./types/env";
import formRouter from "./presentation/form/formRouter";
import worksRouter from './presentation/works/worksRouter';
import skillsRouter from './presentation/skills/skillsRouter';

const app = new Hono<{ Bindings: Env["Bindings"] }>();

app.use(
    "*",
    cors({
    origin: ["https://hashimoto-tsuyoshi-portfolio.pages.dev"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    credentials: true,
    })
);

app.route("/form", formRouter);
app.route("/works", worksRouter);
app.route("/skills", skillsRouter)

export default app;