import { motion, useScroll, useMotionValueEvent, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { resumeFile } from "@data";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();

  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 40);
  });

  // ==============================
  // ACTIVE SECTION DETECTION
  // ==============================

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Moving indicator position
  const progressX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* ================= MOBILE SCROLL PROGRESS ================= */}

      <div
        className="
          pointer-events-none
          fixed
          left-2
          right-2
          top-0
          z-[60]
          h-[3px]
          md:hidden
        "
      >
        {/* Track */}
        <div className="absolute inset-0 rounded-full bg-border/70" />

        {/* Progress */}
        <motion.div
          style={{ scaleX: smoothProgress }}
          className="
            absolute
            inset-y-0
            left-0
            w-full
            origin-left
            rounded-full
            bg-gradient-to-r
            from-primary
            via-secondary
            to-primary
          "
        />

        {/* Scroll position indicator */}
        <motion.span
          style={{ left: progressX }}
          className="
            absolute
            top-1/2
            h-2.5
            w-2.5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-primary
            bg-background
            shadow-[0_0_8px_hsl(var(--primary)/0.5)]
          "
        />
      </div>

      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          solid ? "backdrop-blur-xl" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 py-4 transition-colors md:px-10 ${
            solid ? "border-b border-border bg-background/70" : ""
          }`}
        >
          {/* Logo */}

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-50" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>

            <span className="font-bold tracking-tight">RUBAN</span>
          </a>

          {/* Desktop navigation */}

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => {
              const sectionId = l.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className={`
                    relative
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    transition-colors
                    duration-300
                    ${isActive ? "text-secondary" : "text-foreground/70 hover:text-secondary"}
                  `}
                >
                  {l.label}

                  {/* Active indicator */}
                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="
                      absolute
                      -bottom-2
                      left-0
                      right-0
                      h-[2px]
                      origin-center
                      rounded-full
                      bg-secondary
                    "
                  />
                </a>
              );
            })}
          </nav>

          {/* Actions */}

          <div className="flex items-center gap-3">
            {/* Desktop CV */}

            <a
              href={resumeFile}
              download
              className="
                hidden
                rounded-full
                bg-secondary
                px-5
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-secondary-foreground
                md:inline-block
              "
            >
              Download CV
            </a>

            {/* Mobile menu */}

            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="
                flex
                h-10
                w-10
                flex-col
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-border
                md:hidden
              "
            >
              <span
                className={`h-[2px] w-4 bg-foreground transition-transform ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[2px] w-4 bg-foreground transition-transform ${
                  open ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}

        <motion.div
          initial={false}
          animate={{
            height: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
          className="
            overflow-hidden
            border-b
            border-border
            bg-background/95
            backdrop-blur-xl
            md:hidden
          "
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => {
              const sectionId = l.href.replace("#", "");

              const isActive = activeSection === sectionId;

              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollToSection(l.href);
                  }}
                  className={`
                    relative
                    py-2
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    transition-colors
                    duration-300
                    ${isActive ? "text-secondary" : "text-foreground/80"}
                  `}
                >
                  {l.label}

                  {isActive && (
                    <motion.span
                      layoutId="mobile-active"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-8
                        rounded-full
                        bg-secondary
                      "
                    />
                  )}
                </a>
              );
            })}

            <a
              href={resumeFile}
              download
              className="
                mt-2
                rounded-full
                bg-secondary
                px-5
                py-3
                text-center
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-secondary-foreground
              "
            >
              Download CV
            </a>
          </nav>
        </motion.div>
      </motion.header>
    </>
  );
}
