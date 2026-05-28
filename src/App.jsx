import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import { ScrollProgress } from "./components/SectionScroll";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ScrollProgress />
      <div className="fixed inset-0 z-0 pointer-events-none data-grid" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
