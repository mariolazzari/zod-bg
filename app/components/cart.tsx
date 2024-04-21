"use client";

import { z } from "zod";

const cartSchema = z.array(
  z.object({
    id: z.number(),
    quantity: z.number().int().positive(),
  })
);

export default function Cart() {
  // const cart = localStorage.getItem("cart");

  return <div>Cart</div>;
}
