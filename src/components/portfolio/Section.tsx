import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({
  kicker,
  word,
  accent = "orange",
}: {
  kicker: string;
  word: string;
  accent?: "orange" | "lime";
}) {
  return (
    <div className="mb-10 md:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span
          className={`h-2 w-2 rounded-full ${accent === "orange" ? "bg-primary" : "bg-secondary"}`}
        />
        {kicker}
      </motion.div>
      <motion.div
        className="overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={{ hidden: { y: "105%" }, show: { y: 0 } }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="display text-[16vw] leading-[0.82] md:text-[10vw]"
        >
          {word}
        </motion.h2>
      </motion.div>
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
