import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  ["Claude 101", "Anthropic"],
  ["GenAI Powered Data Analytics Job Simulation", "Tata (Forage)"],
  ["Software Engineering 101", "Listed on resume"],
  ["Oracle SQL Certification", "Listed on resume"],
  ["Informatica PowerCenter", "Listed on resume"],
  ["Qlik Sense for Data Science & Business Intelligence", "Listed on resume"],
  ["PepsiCo Supply Chain Stars Awareness Workshop", "PepsiCo India"],
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-950/45">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <div className="section-label">Certifications</div>
            <h2 className="section-title">Continuous learning across AI, software engineering, and data analytics.</h2>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map(([name, issuer], index) => (
            <motion.div
              key={name}
              className="panel panel-hover p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
            >
              <FiAward className="text-2xl text-amber-300" aria-hidden="true" />
              <h3 className="mt-4 font-black leading-snug text-white">{name}</h3>
              <p className="mt-2 text-sm font-bold text-slate-400">{issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
