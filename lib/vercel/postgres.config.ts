import { createPool } from "@vercel/postgres";

export const pg = createPool({
  connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL,
});
