import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  ["Home", "hero"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const resumeUrl = `${import.meta.env.BASE_URL}Rohit_Prasad_Resume.pdf`;

  useEffect(() => {
    const onScroll = () => {
      try {
        setScrolled(window.scrollY > 16);

        const current = navItems
          .map(([, id]) => document.getElementById(id))
          .filter(Boolean)
          .reverse()
          .find((section) => section.getBoundingClientRect().top <= 120);

        if (current) setActive(current.id);
      } catch {
        // Keep the navbar from breaking the whole page if a browser API misbehaves.
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? "navbar-glass" : "bg-slate-950/70 backdrop-blur-md"}`}>
      <nav className="section-shell h-20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo("hero")}
          className="text-left"
          aria-label="Go to home"
        >
          <span className="block text-lg font-black text-white">Rohit Prasad</span>
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Data Analyst</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => goTo(id)}
              className={`rounded-lg px-3 py-2 text-sm font-bold transition ${
                active === id ? "bg-sky-400/12 text-sky-200" : "text-slate-400 hover:text-white hover:bg-slate-800/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex">
          <a className="btn-secondary text-sm" href={resumeUrl} download="Rohit_Prasad_Data_Analyst_Resume.pdf">
            <FiDownload aria-hidden="true" /> Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden rounded-lg border border-slate-700/70 p-3 text-slate-200"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/96">
          <div className="section-shell py-3 grid gap-2">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => goTo(id)}
                className={`rounded-lg px-4 py-3 text-left font-bold ${
                  active === id ? "bg-sky-400/12 text-sky-200" : "text-slate-300"
                }`}
            >
              {label}
            </button>
          ))}
            <a className="btn-primary mt-2" href={resumeUrl} download="Rohit_Prasad_Data_Analyst_Resume.pdf">
              <FiDownload aria-hidden="true" /> Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
