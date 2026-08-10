import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile, resumeFile } from "@data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = profile.name.split(" ");

  return (
    <div
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-10"
    >
      <motion.div
        className="absolute -right-20 top-20 h-72 w-72 blob bg-primary/25 blur-[90px] md:h-[26rem] md:w-[26rem]"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-24 bottom-10 h-64 w-64 blob bg-secondary/20 blur-[90px]"
        animate={{ y: [0, -26, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <motion.div style={{ y, opacity: fade }} className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.45em] text-secondary"
        >
          <span className="h-px w-10 bg-secondary" />
          {profile.role}
        </motion.p>

        <h1 className="display text-[19vw] leading-[0.8] md:text-[13vw]">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 1 ? "outline-type" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-md text-base text-muted-foreground md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#works"
              className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Works
            </a>
            <a
              href={resumeFile}
              download
              className="rounded-full border border-secondary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden border-y border-border py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs uppercase tracking-[0.4em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>React</span>
              <span className="text-primary">•</span>
              <span>TypeScript</span>
              <span className="text-secondary">•</span>
              <span>Full-Stack</span>
              <span className="text-primary">•</span>
              <span>n8n Automation</span>
              <span className="text-secondary">•</span>
              <span>Tailwind</span>
              <span className="text-primary">•</span>
              <span>Spring Boot</span>
              <span className="text-secondary">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
