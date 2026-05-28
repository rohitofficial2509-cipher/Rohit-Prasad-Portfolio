import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaGit,
  FaPython,
  FaBrain,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiPowerbi,
  SiGoogle,
  SiOpenai,
} from "react-icons/si";

const SkillSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [skillWidth, setSkillWidth] = useState(130);

  const skills = [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
    { name: "Google Apps Script", icon: SiGoogle, color: "#4285F4" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "SQL & DBs", icon: FaDatabase, color: "#336791" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "ChatGPT & AI", icon: SiOpenai, color: "#10a37f" },
    { name: "Claude & Gemini", icon: FaBrain, color: "#a855f7" },
  ];

  // Responsive skill width calculation
  useEffect(() => {
    const updateSkillWidth = () => {
      if (window.innerWidth < 640) {
        setSkillWidth(110); // Mobile
      } else if (window.innerWidth < 1024) {
        setSkillWidth(120); // Tablet
      } else {
        setSkillWidth(130); // Desktop
      }
    };

    updateSkillWidth();
    window.addEventListener("resize", updateSkillWidth);
    return () => window.removeEventListener("resize", updateSkillWidth);
  }, []);

  // Calculate total width for seamless loop
  const totalWidth = skills.length * skillWidth;

  const startAnimation = () => {
    if (animationRef.current) return;

    const animate = () => {
      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPos = prev - 0.7; // Smooth scroll movement
          // Reset position for seamless loop
          if (newPos <= -totalWidth) {
            return 0;
          }
          return newPos;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [isPaused, totalWidth]);

  return (
    <div className="skill-slider py-4 sm:py-6 lg:py-8 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6"
        style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: isPaused ? "none" : "transform 0.05s linear",
        }}
      >
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <motion.div
            key={`first-${index}`}
            className="skill-slide flex flex-col items-center gap-3 p-4 sm:p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl shadow-xl min-w-[100px] sm:min-w-[120px] lg:min-w-[130px] hover:border-indigo-500/30 hover:shadow-indigo-500/5 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            <skill.icon
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}

        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <motion.div
            key={`second-${index}`}
            className="skill-slide flex flex-col items-center gap-3 p-4 sm:p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl shadow-xl min-w-[100px] sm:min-w-[120px] lg:min-w-[130px] hover:border-indigo-500/30 hover:shadow-indigo-500/5 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            <skill.icon
              className="text-2xl sm:text-3xl lg:text-4xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-300 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
