import { useState } from "react";
import { Loader } from "@/components/portfolio/Loader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Works } from "@/components/portfolio/Works";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Scrollbar } from "@/components/portfolio/Scrollbar";
import { useSmoothScroll } from "@/components/portfolio/useSmoothScroll";

export default function App() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();

  return (
    <main className={ready ? "" : "max-h-screen overflow-hidden"}>
      <Loader onDone={() => setReady(true)} />
      <Nav />
      <Scrollbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Works />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
