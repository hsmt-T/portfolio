import type { Env } from "../../types/env"

export const getDB = (env: Env): D1Database => {
    return env.DB
}