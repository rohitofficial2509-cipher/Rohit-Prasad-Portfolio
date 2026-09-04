import { motion } from "framer-motion";
import { FiDatabase, FiLayers, FiServer } from "react-icons/fi";

const projects = [
  {
    icon: FiDatabase,
    title: "Patient Registry & Registration Management System",
    type: "Healthcare Data System",
    description:
      "A healthcare data management system built with Node.js, Express.js, and PostgreSQL for efficient querying and reporting.",
    impact: ["Normalized PostgreSQL Schema", "RESTful Backend Architecture", "Modular Validation"],
    stack: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
  },
  {
    icon: FiLayers,
    title: "LIFECARE Clinic - Healthcare Appointment Management System",
    type: "Full-stack System",
    description:
      "A real-time healthcare appointment management system built with React.js, Node.js, Express.js, and PostgreSQL.",
    impact: ["Real-time Scheduling", "React Frontend", "PostgreSQL Database"],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    icon: FiServer,
    title: "Personal Portfolio",
    type: "Portfolio Website",
    description:
      "My personal portfolio showcasing my experience, projects, technical skills, certifications, and contact details.",
    impact: ["Portfolio Design", "Resume Showcase", "Recruiter Friendly"],
    stack: ["React.js", "Vite", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-950/45">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Healthcare data systems, portfolio work, and automation-focused applications.</h2>
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
