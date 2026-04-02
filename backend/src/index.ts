import { Hono } from 'hono'
import { cors } from "hono/cors";
import formRouter from "./presentation/form/formRouter";
import { Env } from "./types/env";

const app = new Hono<{ Bindings: Env["Bindings"] }>();

app.use(
    "*",
    cors({
    origin: ["http://localhost:3000", "http://localhost:5173/"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowHeaders: ["Content-Type"],
    credentials: true,
    })
);

app.route("/form", formRouter);

export default app;