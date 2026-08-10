import { contact, profile } from "@data";
import { scrollToSection } from "@/lib/scroll";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-5 pt-16 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Quick links
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(l.href);
                }}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
            Socials
          </p>

          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-border
        text-[#4285F4]
        transition-all duration-300
        hover:scale-110
        hover:border-[#4285F4]
        hover:bg-[#4285F4]/10
        hover:shadow-[0_0_12px_rgba(66,133,244,0.25)]
      "
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7 2 2 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.85V8.5H9.4V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.38l.29-6.58Z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-border
        text-[#34A853]
        transition-all duration-300
        hover:scale-110
        hover:border-[#34A853]
        hover:bg-[#34A853]/10
        hover:shadow-[0_0_12px_rgba(52,168,83,0.25)]
      "
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email"
              className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-border
                  text-[#EA4335]
                  transition-all duration-300
                  hover:scale-110
                  hover:border-[#EA4335]
                  hover:bg-[#EA4335]/10
                  hover:shadow-[0_0_12px_rgba(234,67,53,0.25)]
                "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between border-t border-border py-5 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span className="text-secondary">Chennai · Remote</span>
      </div>

      <h2
        className="
          display
          pointer-events-none
          select-none
          pb-2
          text-center
          text-[22vw]
          leading-[0.78]
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-[#4285F4]
          via-[#34A853]
          to-[#EA4335]
        "
      >
        RUBAN
      </h2>
    </footer>
  );
}
