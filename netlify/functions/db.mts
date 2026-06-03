import postgres from "postgres";

let sql: postgres.Sql | null = null;

export function getDb() {
    if (!sql) {
        const url = process.env.DATABASE_URL;

        if (!url) {
            throw new Error("DATABASE_URL is not configured.");
        }

        sql = postgres(url, {
            ssl: "require",
            max: 10,
            idle_timeout: 20,
        });
    }

    return sql;
}