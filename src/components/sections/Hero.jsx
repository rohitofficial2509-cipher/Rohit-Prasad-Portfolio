import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const metrics = [
  { value: "AI + Full-Stack", label: "Python, React, Node.js, MCP" },
  { value: "3 Roles", label: "Dev, Data Automation, Support" },
  { value: "MCA Candidate", label: "IIT Patna & IIIT Ranchi" },
];

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}Rohit_Prasad_Resume.pdf`;
  const profileImageUrl = `${import.meta.env.BASE_URL}rohit-prasad.png`;

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] pt-16 pb-16 flex items-center">
      <div className="section-shell grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-label">Software Developer</div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.98] tracking-normal">
            Rohit Prasad builds software, automation & AI-powered applications.
          </h1>
          <p className="muted-copy mt-6 text-base sm:text-lg max-w-2xl">
            Software Developer in Kolkata experienced in enterprise application support, healthcare data automation, 
            and AI-powered software development using Python, React.js, Node.js, PostgreSQL, OpenRouter, and MCP.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a className="btn-primary" href="#projects">
              View case work <FiArrowRight aria-hidden="true" />
            </a>
            <a className="btn-secondary" href={resumeUrl} download>
              <FiDownload aria-hidden="true" /> Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a className="tag" href="mailto:rohitofficial2509@gmail.com">
              <FiMail aria-hidden="true" className="mr-2 text-sky-300" />
              rohitofficial2509@gmail.com
            </a>
            <a className="tag" href="https://github.com/rohitofficial2509-cipher" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="tag" href="https://linkedin.com/in/rohit-prasad-93360b350" target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" className="mr-2 text-sky-300" />
              LinkedIn
            </a>
            <span className="tag">
              <FiMapPin aria-hidden="true" className="mr-2 text-emerald-300" />
              Kolkata, West Bengal
            </span>
          </div>
        </motion.div>

        <motion.div
          className="panel p-4 sm:p-5"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-lg border border-slate-700/70 bg-slate-900">
              <img
                src={profileImageUrl}
                alt="Rohit Prasad"
                className="aspect-[4/4.55] w-full object-cover object-center"
              />
              <div className="absolute left-4 right-4 bottom-4 panel bg-slate-950/86 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Current focus</p>
                <p className="mt-2 text-sm text-slate-200">
                  Building AI-powered applications at Study Buddy integrating OpenRouter, MCP, Node.js, React, and PostgreSQL.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {metrics.map((item) => (
                <div className="metric" key={item.label}>
                  <div className="text-xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs leading-snug text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
