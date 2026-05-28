import { motion } from "framer-motion";
import { FiActivity, FiDatabase, FiLayers } from "react-icons/fi";

const projects = [
  {
    icon: FiActivity,
    title: "Healthcare Data Quality Automation",
    type: "Professional system",
    description:
      "Automated extraction and validation workflows for clinic data using Google Apps Script and Google Workspace.",
    impact: ["Reduced manual checks", "Improved reliability", "Enabled cleaner analysis"],
    stack: ["Google Apps Script", "Google Sheets", "Data validation", "Healthcare data"],
  },
  {
    icon: FiLayers,
    title: "LIFECARE Clinic Appointment System",
    type: "Full-stack project",
    description:
      "A responsive healthcare appointment platform with patient scheduling workflows and database-backed records.",
    impact: ["React interface", "REST API integration", "PostgreSQL schema"],
    stack: ["React.js", "Tailwind CSS", "Axios", "REST APIs", "PostgreSQL"],
  },
  {
    icon: FiDatabase,
    title: "Operational Reporting Foundation",
    type: "Analytics workflow",
    description:
      "Standardized patient and operational datasets to support clinic performance and treatment outcome reporting.",
    impact: ["Cleaned datasets", "Consistent fields", "Reporting-ready data"],
    stack: ["Data cleaning", "Power BI", "MS Office", "Google Workspace"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-950/45">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Projects that show analysis plus implementation.</h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          {projects.map(({ icon: Icon, title, type, description, impact, stack }, index) => (
            <motion.article
              key={title}
              className="panel panel-hover p-5 sm:p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-center justify-between gap-4">
                <Icon className="text-3xl text-sky-300" aria-hidden="true" />
                <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200">
                  {type}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="muted-copy mt-3 text-sm">{description}</p>

              <div className="mt-5 grid gap-2">
                {impact.map((item) => (
                  <div key={item} className="rounded-lg bg-slate-950/42 border border-slate-800 px-3 py-2 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
