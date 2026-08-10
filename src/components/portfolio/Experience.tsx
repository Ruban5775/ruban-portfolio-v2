import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Section, SectionTitle } from "./Section";
import { experiences } from "@data";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleExperience = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="experience">
      <SectionTitle kicker="Career" word="Experience" />

      <div className="relative mt-10 pl-5 sm:pl-7 md:pl-10">
        {/* Vertical timeline */}
        <div className="absolute left-[7px] top-0 h-full w-px bg-gradient-to-b from-secondary via-primary to-secondary sm:left-[11px] md:left-[15px]" />

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={`${experience.role}-${experience.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.span
                  animate={{
                    scale: isOpen ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`
                    absolute
                    -left-[18px]
                    top-8
                    z-10
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-background
                    sm:-left-[22px]
                    md:-left-[28px]
                    md:h-3.5
                    md:w-3.5
                    ${
                      experience.status === "current"
                        ? "bg-secondary shadow-[0_0_12px_hsl(var(--secondary))]"
                        : "bg-primary"
                    }
                  `}
                />

                {/* Experience Card */}
                <motion.button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  whileTap={{ scale: 0.995 }}
                  className="
                    grain-card
                    group
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    p-4
                    text-left
                    transition-colors
                    duration-300
                    hover:border-primary/40
                    sm:p-5
                    md:p-7
                  "
                >
                  {/* Hover background */}
                  <span
                    className={`
                      pointer-events-none
                      absolute
                      inset-0
                      -z-10
                      origin-left
                      scale-x-0
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                      ${
                        experience.status === "current"
                          ? "bg-secondary/[0.04]"
                          : "bg-primary/[0.04]"
                      }
                    `}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      {/* Status + Period */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span
                          className={`
                            inline-flex
                            items-center
                            rounded-full
                            border
                            px-2.5
                            py-1
                            text-[9px]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            sm:text-[10px]
                            ${
                              experience.status === "current"
                                ? "border-secondary/30 bg-secondary/10 text-secondary"
                                : "border-border bg-foreground/[0.03] text-muted-foreground"
                            }
                          `}
                        >
                          {experience.status === "current" ? "Current" : "Past"}
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.2em]">
                          {experience.period}
                        </span>
                      </div>

                      {/* Role */}
                      <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg md:text-xl">
                        {experience.role}
                      </h3>

                      {/* Company */}
                      <p className="mt-1 text-xs text-secondary sm:text-sm">
                        {experience.company}
                        {experience.location ? ` · ${experience.location}` : ""}
                      </p>
                    </div>

                    {/* Expand button */}
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-border
                        text-sm
                        text-muted-foreground
                        transition-all
                        duration-300
                        group-hover:border-primary/40
                        group-hover:text-primary
                        sm:h-9
                        sm:w-9
                        md:h-10
                        md:w-10
                      `}
                    >
                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground sm:text-sm md:mt-5">
                    {experience.description}
                  </p>

                  {/* Expandable Details */}
                  <AnimatePresence initial={false}>
                    {isOpen && experience.details?.length ? (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 border-t border-border/60 pt-4 md:mt-6 md:pt-5">
                          <ul className="space-y-2.5">
                            {experience.details.map((detail, detailIndex) => (
                              <motion.li
                                key={detailIndex}
                                initial={{
                                  opacity: 0,
                                  x: -8,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: detailIndex * 0.05,
                                }}
                                className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground sm:text-sm"
                              >
                                <span
                                  className={`
                                    mt-[7px]
                                    h-1
                                    w-1
                                    shrink-0
                                    rounded-full
                                    ${
                                      experience.status === "current"
                                        ? "bg-secondary"
                                        : "bg-primary"
                                    }
                                  `}
                                />

                                <span>{detail}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
