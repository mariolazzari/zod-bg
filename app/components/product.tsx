"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { number, string, z } from "zod";

const ProductSchema = z.object({
  name: string().min(5).max(16),
  price: number().positive(),
});

type Product = z.infer<typeof ProductSchema>;

const getPrice = ({ price }: Product) => price.toFixed(2);

const paramsSchema = z.object({
  id: z.coerce.number().positive(),
  color: z.enum(["red", "black", "blue"]),
});

function Product() {
  const params = useSearchParams();
  const paramsObj = Object.fromEntries(params);
  const validateParams = paramsSchema.safeParse(paramsObj);

  if (!validateParams.success) {
    return;
  }

  console.log(validateParams.data);

  useEffect(() => {
    fetch("/api/product")
      .then(res => res.json())
      .then((data: unknown) => {
        // validation
        // const product = productScheme.parse(data) -> throw error
        const product = ProductSchema.safeParse(data);
        if (!product.success) {
          return console.error(product.error);
        }

        const { name } = product.data;
        console.log(`${name}: ${getPrice(product.data)}`);
      });
  }, []);

  return <div>Product</div>;
}

export default Product;
