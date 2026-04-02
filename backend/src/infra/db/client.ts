import type { Env } from "../../types/env"

export const getDB = (env: Env["Bindings"]): D1Database => {
    return env.DB;
};