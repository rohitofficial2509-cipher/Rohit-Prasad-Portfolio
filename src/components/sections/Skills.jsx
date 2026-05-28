import { motion } from "framer-motion";

const groups = [
  {
    title: "Analytics & Automation",
    skills: ["Google Apps Script", "Google Workspace", "Power BI", "MS Office", "Data cleaning", "Data validation"],
  },
  {
    title: "Engineering",
    skills: ["JavaScript", "Python", "Java", "Node.js", "REST APIs", "Axios"],
  },
  {
    title: "Web & Database",
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "PostgreSQL", "PgAdmin"],
  },
  {
    title: "Service Management",
    skills: ["Application support", "Incident management", "ITIL processes", "Troubleshooting", "System monitoring"],
  },
  {
    title: "AI Tooling",
    skills: ["ChatGPT", "Claude", "Google Gemini", "DeepSeek", "OpenAI Codex"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="max-w-3xl">
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">Skills mapped to the work I actually do.</h2>
          </div>
          <p className="muted-copy max-w-md">
            A mix of analytics, automation, support, and full-stack development lets me solve the whole workflow.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="panel panel-hover p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <h3 className="font-black text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
