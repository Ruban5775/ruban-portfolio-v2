import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { skills } from "@data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle kicker="Toolkit" word="Skills" />
      <div className="space-y-3">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group grid gap-4 border-t border-border py-6 md:grid-cols-[240px_1fr] md:items-center"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-6 w-1.5 rounded-full ${group.accent === "orange" ? "bg-primary" : "bg-secondary"}`}
              />
              <h3 className="text-base font-semibold uppercase tracking-widest">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.06 + i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    group.accent === "orange"
                      ? "border-primary/30 hover:border-primary hover:text-primary"
                      : "border-secondary/30 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
