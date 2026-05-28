// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, desc, img, url }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -5 }}
      className="card-space p-6 shadow-xl flex flex-col items-center gap-4 transition-all duration-300 group"
    >
      {/* Placeholder for image */}
      <div className="h-32 w-32 rounded-lg bg-gradient-to-br from-[#00d4ff]/20 to-[#e94560]/20 flex items-center justify-center border border-[#00d4ff]/30">
        <FaGithub className="text-4xl text-[#00d4ff] group-hover:text-[#e94560] transition-colors" />
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
          {title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
      </div>

      <div className="flex items-center gap-2 text-[#00d4ff] group-hover:text-[#e94560] transition-colors">
        <FaExternalLinkAlt className="text-sm" />
        <span className="text-sm font-medium">View Project</span>
      </div>
    </motion.a>
  );
}
