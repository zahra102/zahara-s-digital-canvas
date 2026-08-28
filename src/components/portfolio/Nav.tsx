import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const activeIndex = Math.max(0, LINKS.findIndex((link) => link.id === active));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div aria-hidden="true" className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="h-6 w-6 shrink-0 rounded-md accent-rule opacity-90"
          />
          <span className="truncate font-display text-[0.95rem] font-semibold tracking-tight">
            Zahara<span className="text-accent">.</span>Dalal
          </span>
        </a>

        <nav className="relative hidden items-center gap-1 lg:flex">
          <span
            aria-hidden="true"
            className="nav-glider pointer-events-none absolute bottom-0 h-px rounded-full accent-rule transition-all duration-500"
            style={{
              width: `calc(${100 / LINKS.length}% - 0.5rem)`,
              left: `calc(${activeIndex * 100 / LINKS.length}% + 0.25rem)`,
            }}
          />
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                active === l.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-card text-foreground transition-colors hover:border-border-strong lg:hidden"
        >
          {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-sm transition-colors",
                    active === l.id
                      ? "bg-elevated text-accent"
                      : "text-muted-foreground hover:bg-elevated hover:text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
