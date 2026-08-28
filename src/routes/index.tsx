import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import {
  Hero,
  About,
  Experience,
  Toolkit,
  Leadership,
  Education,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Toolkit />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
