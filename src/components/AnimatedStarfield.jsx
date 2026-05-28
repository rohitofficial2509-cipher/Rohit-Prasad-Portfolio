import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedStarfield() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  // Generate floating particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      {/* Interactive mouse trail */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full opacity-60 blur-sm pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : 1,
          opacity: isHovering ? [0.6, 0.9, 0.6] : 0.6,
        }}
        transition={{ duration: 0.5, repeat: isHovering ? Infinity : 0 }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl"
        style={{
          left: "10%",
          top: "20%",
        }}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
          scale: isHovering ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl"
        style={{
          right: "15%",
          top: "60%",
        }}
        animate={{
          x: -mousePosition.x * 0.05,
          y: -mousePosition.y * 0.05,
          scale: isHovering ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse-slow" />
        <div
          className="w-full h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Mouse interaction ripple effect */}
      {isHovering && (
        <motion.div
          className="absolute w-32 h-32 border-2 border-cyan-400 rounded-full pointer-events-none"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
