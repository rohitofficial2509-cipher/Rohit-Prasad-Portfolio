import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-40"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 0.8 : 0.6,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />
    </>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

export function ParallaxSection({ children, speed = 0.5 }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}

export function FadeInOnScroll({ children, delay = 0 }) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div style={{ opacity, y }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function StickyHeader({ children }) {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]
  );
  const backdropBlur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"]
  );

  return (
    <motion.div
      className="sticky top-0 z-40"
      style={{ backgroundColor, backdropFilter: backdropBlur }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollTrigger({ children, triggerPoint = 0.5 }) {
  const { scrollYProgress } = useScroll();
  const isVisible = useTransform(
    scrollYProgress,
    [0, triggerPoint, 1],
    [false, true, false]
  );

  return (
    <motion.div
      animate={{ opacity: isVisible.get() ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
