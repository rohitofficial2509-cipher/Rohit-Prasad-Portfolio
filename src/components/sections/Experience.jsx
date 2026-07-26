import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const roles = [
  {
    title: "Junior Software Developer",
    company: "Study Buddy",
    period: "Jul 2026 - Present",
    location: "Kolkata, India",
    summary:
      "Developing AI-powered software applications, RESTful services, and database-driven solutions.",
    bullets: [
      "Develop AI-powered software applications using Python and modern web technologies.",
      "Design and implement RESTful backend services using Node.js and Express.js.",
      "Integrate OpenRouter and Model Context Protocol (MCP).",
      "Develop React.js interfaces and manage PostgreSQL databases.",
      "Collaborate using Git, GitHub, npm, VS Code, Claude Code and Codex CLI.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Dr. Prasanta Banerji Homeopathic Research Clinic",
    period: "Apr 2026 - Jul 2026",
    location: "Kolkata, India",
    summary:
      "Automated data operations and healthcare analytics workflows.",
    bullets: [
      "Automated workflows using Google Apps Script and Google Workspace.",
      "Built healthcare data pipelines and improved reporting quality.",
      "Generated analytical reports and improved data quality.",
    ],
  },
  {
    title: "ADM ISMO Analyst Trainee",
    company: "Cognizant",
    period: "Jan 2026 - Apr 2026",
    location: "India",
    summary:
      "Enterprise application support and ITIL-based service management.",
    bullets: [
      "Supported enterprise applications through monitoring and incident resolution.",
      "Worked with ERP application support and ITIL-based service management.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-950/45">
      <div className="section-shell">
        <div className="max-w-3xl">
          <div className="section-label">Experience</div>
          <h2 className="section-title">Professional experience in software, AI, automation, and enterprise support.</h2>
        </div>

        <div className="mt-10 grid gap-5">
          {roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.title}`}
              className="panel panel-hover p-5 sm:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{role.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm font-bold text-sky-200">
                    <FiBriefcase aria-hidden="true" />
                    {role.company}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-300">
                  <span className="tag"><FiCalendar className="mr-2" aria-hidden="true" />{role.period}</span>
                  <span className="tag"><FiMapPin className="mr-2" aria-hidden="true" />{role.location}</span>
                </div>
              </div>

              <p className="muted-copy mt-5">{role.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-lg border border-slate-800 bg-slate-950/38 p-4 text-sm leading-6 text-slate-300">
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
