import CTA from "@/components/sections/cta/default";
import Footer from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/default";
import Items from "@/components/sections/items/default";
import Navbar from "@/components/sections/navbar/default";

export default function Home() {
  return (
    <main className="bg-background text-foreground relative min-h-screen w-full">
      <div className="relative pt-0 sm:pt-4">
        <Navbar />
        <div className="relative z-10">
          <Hero />
          <Items />
          <CTA />
          <Footer />
        </div>
      </div>
    </main>
  );
}
