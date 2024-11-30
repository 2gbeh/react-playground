import { createPool } from "@vercel/postgres";

export const vercelPgPool = createPool({
  connectionString: process.env.POSTGRES_URL,
});
