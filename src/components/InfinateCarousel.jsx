import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function InfiniteCarousel({ items, speed = 20 }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="flex gap-8"
        animate={{
          x: isHovering ? mousePosition.x * 0.1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* First set of items */}
        {items.map((item, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0"
            whileHover={{
              scale: 1.1,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.3 },
            }}
          >
            {item}
          </motion.div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0"
            whileHover={{
              scale: 1.1,
              rotate: [0, 2, -2, 0],
              transition: { duration: 0.3 },
            }}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}

export function FloatingCards({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-cyan-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(1, 226, 252, 0.2)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {card}
        </motion.div>
      ))}
    </div>
  );
}

export function InteractiveGrid({ items, columns = 3 }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative group"
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-lg blur-xl"
            animate={{
              opacity: hoveredIndex === index ? 1 : 0,
              scale: hoveredIndex === index ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6">
            {item}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
