import Cart from "./components/cart";
import CheckoutForm from "./components/checkout-form";
import Product from "./components/product";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Product />
      <CheckoutForm />
      <Cart />
    </main>
  );
}
