import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(5).max(10),
  price: z.number().min(0),
  available: z.boolean().default(false),
});
