import { motion } from "framer-motion";
import { FiCheckCircle, FiCpu, FiServer, FiZap } from "react-icons/fi";

const strengths = [
  {
    icon: FiCpu,
    title: "Data Analysis & Automation",
    copy: "Turning raw data into reports, dashboards, and workflow improvements using SQL, Python, and Google Workspace.",
  },
  {
    icon: FiServer,
    title: "Backend & Data Apps",
    copy: "Designing modular Express.js backends, normalized PostgreSQL schemas, and data-driven APIs.",
  },
  {
    icon: FiZap,
    title: "Automation & Systems Support",
    copy: "Streamlining operations with Google Apps Script automation and enterprise application support.",
  },
];

const outcomes = [
  "Hands-on experience in data pipelines, data cleaning, reporting, dashboard development, and workflow automation.",
  "Built healthcare data management systems with Node.js, Express.js, and PostgreSQL.",
  "Strong software engineering foundation for building data-driven applications and end-to-end automations.",
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
            <h2 className="section-title">A Data Analyst bridging analytics, automation, backend engineering, and AI.</h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="muted-copy text-lg">
              I am a Data Analyst with hands-on experience in data pipelines, data cleaning, reporting, dashboard
              development, and workflow automation.
              I also have a strong software engineering and backend foundation, allowing me to build data-driven
              applications and automate end-to-end workflows.
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
