import { motion } from "framer-motion";

const schools = [
  {
    degree: "Master of Computer Applications",
    institution: "Indian Institute of Technology Patna & Indian Institute of Information Technology Ranchi",
    period: "2026 - Present",
    detail: "Pursuing",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "Saroj Mohan Institute of Technology",
    period: "2022 - 2025",
    detail: "CGPA 7.27/10",
  },
  {
    degree: "Higher Secondary, Commerce with Mathematics",
    institution: "The Bhawanipur Gujarati Education Society School (ISC)",
    period: "2021 - 2022",
    detail: "72%",
  },
  {
    degree: "Matriculation",
    institution: "National High School (CBSE)",
    period: "2019 - 2020",
    detail: "85%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="section-label">Education</div>
        <h2 className="section-title max-w-3xl">Academic foundation in computing and analytics.</h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {schools.map((school, index) => (
            <motion.article
              key={school.degree}
              className="panel panel-hover p-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-white">{school.degree}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{school.institution}</p>
                </div>
                <span className="tag">{school.detail}</span>
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{school.period}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
