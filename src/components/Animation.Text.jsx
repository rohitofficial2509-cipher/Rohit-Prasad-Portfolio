import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedText({ children, className = "", delay = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        color: "#01E2FC",
        
      }}
    >
      {children}
      {isHovered && (
        <motion.span
          className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-lg blur opacity-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.span>
  );
}

export function GlitchText({ children, className = "" }) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        scale: 1.02,
        filter: "hue-rotate(10deg)",
      }}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 text-pink-500 opacity-50"
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 1, -1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-500 opacity-30"
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -1, 1, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.05,
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function ShimmerText({ children, className = "" }) {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.span>
  );
}

export function FloatingText({ children, className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        y: [0, -5, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.span>
  );
}
