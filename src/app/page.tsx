import Header from "@/components/layout/Header";
import InformativeTagsSection from "./(components)/InformativeTagsSection";
import ProductsSection from "./(components)/ProductsSection";
import { CartProvider } from "@/providers/Cart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 gap-12">
      <CartProvider>
        <Header />
        <InformativeTagsSection />
        <ProductsSection />
      </CartProvider>
    </main>
  );
}
