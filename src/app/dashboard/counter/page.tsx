
import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";


// atajo mr + tab
export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {

  
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}
