import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { profile } from "@data";

export function About() {
  return (
    <Section id="about">
      <SectionTitle kicker="About me" word="Who I am" accent="lime" />
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">{profile.bio}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            <span className="text-sm text-secondary">{profile.status}</span>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {profile.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 120, scale: 0.92, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="grain-card flex items-baseline justify-between rounded-2xl border border-border p-6"
            >
              <span className="display text-4xl text-primary md:text-5xl">{s.value}</span>
              <span className="text-right text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
