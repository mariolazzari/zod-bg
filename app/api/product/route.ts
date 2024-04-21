export async function GET(_req: Request) {
  const product = {
    name: "Product One",
    price: 100,
  };

  return Response.json(product);
}
