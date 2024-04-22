import { NextResponse } from "next/server";
import { productSchema } from "@/validators/product";
import { envSchema } from "@/validators/env";

export async function GET(_req: Request) {
  const product = {
    name: "Product One",
    price: 100,
  };

  return Response.json(product);
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    const parsed = productSchema.safeParse(body);
    const env = envSchema.safeParse(process.env);
    console.log(env);

    if (parsed.success) {
      return NextResponse.json(parsed.data);
    } else {
      return NextResponse.json(parsed.error);
    }
  } catch (ex) {
    return NextResponse.json(ex);
  }
}
