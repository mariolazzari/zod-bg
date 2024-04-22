import { z } from "zod";

export const envSchema = z.object({
  API_KEY: z.string(),
  DB_URI: z.string(),
});
