import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "rohitofficial2509@gmail.com",
    href: "mailto:rohitofficial2509@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 9748654547",
    href: "tel:+919748654547",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohit-prasad-93360b350",
    href: "https://linkedin.com/in/rohit-prasad-93360b350",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <motion.div
          className="panel p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
            <div>
              <div className="section-label">Contact</div>
              <h2 className="section-title">Let us talk data analysis, dashboards, automation, or backend applications.</h2>
              <p className="muted-copy mt-5">
                I am open to Data Analyst roles, analytics projects, backend engineering, full-stack applications, and automation systems.
              </p>
              <a className="btn-primary mt-7" href="mailto:rohitofficial2509@gmail.com">
                <FiMail aria-hidden="true" /> Send email
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <Icon className="text-2xl text-sky-300" aria-hidden="true" />
                    <span className="mt-4 block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                      {label}
                    </span>
                    <span className="mt-2 block break-words text-sm font-bold leading-6 text-slate-200">{value}</span>
                  </>
                );

                return href ? (
                  <a key={label} className="rounded-lg border border-slate-800 bg-slate-950/42 p-5 transition hover:border-sky-300/35" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="rounded-lg border border-slate-800 bg-slate-950/42 p-5">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
