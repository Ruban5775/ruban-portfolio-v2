import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section, SectionTitle } from "./Section";
import { services } from "@data";

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <Section id="services">
      <SectionTitle kicker="What I can do" word="Services" accent="lime" />
      <div ref={ref} className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 120, scale: 0.92, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="grain-card relative overflow-hidden rounded-[2rem] border border-border p-8"
          >
            <motion.div
              style={{ y: drift }}
              className={`absolute -right-10 -top-10 h-40 w-40 blob blur-2xl ${
                i === 1 ? "bg-secondary/30" : "bg-primary/30"
              }`}
            />
            <span className="display relative text-6xl text-foreground/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="relative mt-4 text-2xl font-semibold leading-tight">{s.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.description}
            </p>
            <ul className="relative mt-6 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/80">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-secondary" : "bg-primary"}`}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
