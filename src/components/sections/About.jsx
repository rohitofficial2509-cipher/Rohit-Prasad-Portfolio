import { motion } from "framer-motion";
import { FiCheckCircle, FiDatabase, FiShield, FiZap } from "react-icons/fi";

const strengths = [
  {
    icon: FiDatabase,
    title: "Data engineering mindset",
    copy: "Designing repeatable extraction, cleaning, validation, and reporting flows instead of one-off spreadsheets.",
  },
  {
    icon: FiShield,
    title: "Healthcare data care",
    copy: "Working with patient and operational datasets where accuracy, consistency, and responsible handling matter.",
  },
  {
    icon: FiZap,
    title: "Automation bias",
    copy: "Using Google Apps Script and Google Workspace to remove manual friction from recurring data work.",
  },
];

const outcomes = [
  "Automated data pipelines for extraction and validation within the first 3 months.",
  "Built full-stack appointment workflow using React, Tailwind CSS, REST APIs, Axios, and PostgreSQL.",
  "Comfortable connecting analytics, application support, and business operations.",
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
            <h2 className="section-title">A data professional who can also build the tool.</h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="muted-copy text-lg">
              I work at the point where messy operational data becomes dependable intelligence.
              My experience spans healthcare analytics, data quality automation, Google Workspace
              systems, ERP application support, and full-stack development.
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
