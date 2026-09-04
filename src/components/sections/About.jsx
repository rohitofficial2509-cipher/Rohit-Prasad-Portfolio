import { motion } from "framer-motion";
import { FiCheckCircle, FiCpu, FiServer, FiZap } from "react-icons/fi";

const strengths = [
  {
    icon: FiCpu,
    title: "AI & Application Development",
    copy: "Developing intelligent software using Python, React.js, Node.js, OpenRouter, and MCP.",
  },
  {
    icon: FiServer,
    title: "Backend & REST APIs",
    copy: "Designing modular Express.js backends, normalized PostgreSQL schemas, and robust API endpoints.",
  },
  {
    icon: FiZap,
    title: "Automation & Systems Support",
    copy: "Streamlining operations with Google Apps Script automation and enterprise application support.",
  },
];

const outcomes = [
  "Currently building AI-powered software applications at Study Buddy using Python, React.js, Node.js, PostgreSQL, OpenRouter, and MCP.",
  "Designed RESTful APIs and a normalized PostgreSQL schema for patient registration and clinic management systems.",
  "Automated healthcare workflows and reporting with Google Apps Script and Google Workspace.",
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">About</div>
            <h2 className="section-title">A Software Developer bridging AI, backend engineering, and data automation.</h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="muted-copy text-lg">
              Software Developer with professional experience in enterprise application support, healthcare data automation,
              and AI-powered software development. Experienced in backend development, RESTful APIs, workflow automation,
              and database-driven applications.
            </p>
            <div className="panel p-5 sm:p-6">
              <h3 className="text-lg font-black text-white">What I bring</h3>
              <div className="mt-5 grid sm:grid-cols-3 gap-4">
                {strengths.map(({ icon: Icon, title, copy }) => (
                  <div key={title} className="rounded-lg border border-slate-800 bg-slate-950/36 p-4">
                    <Icon className="text-2xl text-sky-300" aria-hidden="true" />
                    <h4 className="mt-4 font-black text-slate-100">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-slate-800 bg-slate-900/45 p-4">
                  <FiCheckCircle className="mt-1 flex-none text-emerald-300" aria-hidden="true" />
                  <span className="text-sm leading-6 text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
