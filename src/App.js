import "./index.css";
import Cursor from "./components/Cursor";
import BackgroundCanvas from "./components/BackgroundCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useReveal from "./components/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Cursor />
      <div className="scanlines" />
      <BackgroundCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
