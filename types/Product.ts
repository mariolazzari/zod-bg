import { z } from "zod";
import { productSchema } from "@/validators/productSchema";

export type Product = z.infer<typeof productSchema>;
