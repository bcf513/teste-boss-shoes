import Header from "@/components/layout/Header";
import InformativeTagsSection from "./(components)/InformativeTagsSection";
import ProductsSection from "./(components)/ProductsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <InformativeTagsSection />
      <ProductsSection />
    </main>
  );
}
