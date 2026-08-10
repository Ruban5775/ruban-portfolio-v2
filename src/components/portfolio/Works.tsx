import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { projects } from "@data";

export function Works() {
  return (
    <Section id="works">
      <SectionTitle kicker="Selected" word="Works" />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => {
          const accent = i % 2 === 0 ? "bg-primary" : "bg-secondary";

          const accentGlow =
            i % 2 === 0
              ? "group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]"
              : "group-hover:shadow-[0_0_25px_hsl(var(--secondary)/0.25)]";

          const accentBackground =
            i % 2 === 0 ? "group-hover:bg-primary/[0.06]" : "group-hover:bg-secondary/[0.06]";

          const buttonStyle =
            i % 2 === 0
              ? "max-md:bg-primary max-md:text-primary-foreground max-md:border-primary hover:border-primary/50 hover:text-primary"
              : "max-md:bg-secondary max-md:text-secondary-foreground max-md:border-secondary hover:border-secondary/50 hover:text-secondary";

          return (
            <motion.article
              key={p.title}
              initial={{
                opacity: 0,
                y: 70,
                clipPath: "inset(12% 0 12% 0 round 2rem)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0% 0 0% 0 round 2rem)",
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.85,
                delay: (i % 2) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                group
                grain-card
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-border
                p-7
                transition-all
                duration-500
                ${accentBackground}
                ${accentGlow}
                md:p-9
              `}
            >
              {/* TOP ACCENT LINE */}
              <span
                className={`
                  absolute
                  left-0
                  right-0
                  top-0
                  h-[2px]
                  ${accent}
                  opacity-80
                  transition-all
                  duration-500
                  group-hover:h-[3px]
                  group-hover:opacity-100
                `}
              />

              {/* Existing background blob */}
              <div
                className={`absolute -right-16 -top-16 h-44 w-44 blob blur-3xl transition-opacity duration-500 ${
                  i % 2 ? "bg-secondary/25" : "bg-primary/25"
                } opacity-60 group-hover:opacity-100`}
              />

              {/* Project number */}
              <span className="relative text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="relative mt-4 text-xl font-semibold text-foreground">{p.title}</h3>

              {/* Description */}
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              {/* Stack */}
              <div className="relative mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live button */}
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    relative
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-border
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-foreground
                    transition-all
                    duration-300
                    ${buttonStyle}
                  `}
                >
                  View live
                  <span>↗</span>
                </a>
              ) : null}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
