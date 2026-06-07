import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founders } from "@/components/sections/Founders";
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";
import { GateOverlay } from "@/components/ui/GateOverlay";

export default function Home() {
  return (
    <>
      <GateOverlay />
      <Nav />
      <main>
        <Hero />
        <About />
        <Founders />
        <Events />
      </main>
      <Footer />
    </>
  );
}
