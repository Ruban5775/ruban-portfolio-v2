import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { contact } from "@data";

type Item = {
  label: string;
  value: string;
  href?: string;
  accent: "orange" | "lime";
};

const items: Item[] = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    accent: "orange",
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    accent: "lime",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Ruban",
    href: contact.linkedin,
    accent: "orange",
  },
  {
    label: "GitHub",
    value: "github.com/Ruban",
    href: contact.github,
    accent: "lime",
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionTitle kicker="Connect" word="Contact" />

      <div className="mt-10 w-full border-t border-border/70">
        {items.map((item, index) => {
          const Tag = item.href ? "a" : "div";

          const accentColor = item.accent === "orange" ? "text-primary" : "text-secondary";

          const hoverBackground = item.accent === "orange" ? "bg-primary/10" : "bg-secondary/10";

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="border-b border-border/70"
            >
              <Tag
                {...(item.href
                  ? {
                      href: item.href,
                      target: item.href.startsWith("http") ? "_blank" : undefined,
                      rel: item.href.startsWith("http") ? "noreferrer" : undefined,
                    }
                  : {})}
                className="group relative flex min-h-[100px] w-full items-center overflow-hidden px-2 py-6 transition-colors duration-300 sm:min-h-[120px] sm:px-4 md:min-h-[150px] md:px-6"
              >
                {/* Hover background */}
                <span
                  className={`absolute inset-0 -z-10 origin-left scale-x-0 ${hoverBackground} transition-transform duration-500 ease-out group-hover:scale-x-100`}
                />

                {/* Label */}
                <span
                  className="
                    w-[76px]
                    shrink-0
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.28em]
                    text-muted-foreground
                    sm:w-[105px]
                    sm:text-[10px]
                    md:w-[170px]
                    md:text-xs
                    md:tracking-[0.4em]
                  "
                >
                  {item.label}
                </span>

                {/* Value */}
                <span
                  className="
                    min-w-0
                    flex-1
                    truncate
                    pr-3
                    text-[15px]
                    font-semibold
                    tracking-tight
                    text-foreground
                    transition-colors
                    duration-300
                    group-hover:text-foreground
                    sm:text-lg
                    md:pr-8
                    md:text-2xl
                    lg:text-3xl
                    xl:text-[34px]
                  "
                >
                  {item.value}
                </span>

                {/* Arrow */}
                <span
                  className={`
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    ${accentColor}
                    transition-all
                    duration-300
                    group-hover:scale-110
                    sm:h-12
                    sm:w-12
                    md:h-16
                    md:w-16
                    lg:h-[76px]
                    lg:w-[76px]
                  `}
                >
                  <span
                    className="
                      text-lg
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      sm:text-xl
                      md:text-2xl
                      lg:text-3xl
                    "
                  >
                    ↗
                  </span>
                </span>
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
