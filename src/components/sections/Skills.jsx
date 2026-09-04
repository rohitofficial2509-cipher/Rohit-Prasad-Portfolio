import { motion } from "framer-motion";

const groups = [
  {
    title: "Data & Analytics",
    skills: ["SQL", "Python", "Excel / Google Sheets", "Data Cleaning & Validation", "Data Visualization", "Dashboard Development", "Automated Reporting"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Programming & Backend",
    skills: ["Python", "JavaScript", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Automation & AI",
    skills: ["Google Apps Script", "Google Workspace", "Web Scraping", "Data Pipelines", "OpenRouter", "Model Context Protocol (MCP)", "LLM Integration", "Prompt Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div className="max-w-3xl">
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">Core technical skills across analytics, automation, and backend development.</h2>
          </div>
          <p className="muted-copy max-w-md">
            SQL, Python, dashboards, automation, backend APIs, and AI-assisted workflow design.
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
