import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Founders } from "@/components/sections/Founders";
import { Events } from "@/components/sections/Events";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
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
