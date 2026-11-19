import { Hono } from 'hono'
import { cors } from "hono/cors";
import { Env } from "./types/env";
import formRouter from "./presentation/form/formRouter";
import worksRouter from './presentation/works/worksRouter';
import skillsRouter from './presentation/skills/skillsRouter';
import internsRouter from './presentation/interns/internsRouter';

const app = new Hono<{ Bindings: Env["Bindings"] }>();

// Use Cloudflare's trusted geolocation metadata, never a client-supplied header.
app.use("*", async (c, next) => {
    if (c.req.raw.cf?.country !== "JP") {
        c.header("Cache-Control", "no-store");
        return c.json({ error: "Access is only available from Japan." }, 403);
    }
    await next();
});

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
app.route("interns", internsRouter)

export default app;