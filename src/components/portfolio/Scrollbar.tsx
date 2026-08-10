import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function Scrollbar() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const top = useTransform(p, (v) => `${v * 100}%`);

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-50 hidden h-[42vh] -translate-y-1/2 md:block">
      <div className="relative h-full w-[2px] bg-border">
        <motion.div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-primary to-secondary"
          style={{ scaleY: p }}
        />
        <motion.div
          className="absolute -left-[7px] h-4 w-4 -translate-y-1/2 blob bg-secondary shadow-[0_0_20px_oklch(0.88_0.23_128/60%)]"
          style={{ top }}
        />
      </div>
    </div>
  );
}
