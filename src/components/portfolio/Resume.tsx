import { motion } from "framer-motion";
import { resumeFile, profile } from "@data";

export function Resume() {
  return (
    <section id="resume" className="px-5 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 md:flex-row md:items-center md:justify-between md:p-14"
      >
        <motion.div
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -left-20 -top-20 h-56 w-56 blob bg-primary/25 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-24 right-0 h-56 w-56 blob bg-secondary/20 blur-3xl"
        />
        <div className="relative">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-secondary">Resume</p>
          <h3 className="display text-4xl md:text-6xl">Grab my CV</h3>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The full breakdown of {profile.role.toLowerCase()} work, stack and project delivery — in
            one page.
          </p>
        </div>
        <a
          href={resumeFile}
          download
          className="relative inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-widest text-secondary-foreground transition-transform hover:-translate-y-1"
        >
          Download Resume
          <span aria-hidden>↓</span>
        </a>
      </motion.div>
    </section>
  );
}
