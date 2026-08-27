import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";
import { SystemVisual } from "./SystemVisual";

const EMAIL = "zahradalal102@gmail.com";

/* ---------------------------------- HERO --------------------------------- */

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 0%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-[0.7rem] tracking-[0.2em] text-rose sm:text-xs">
            COMPUTER SCIENCE <span className="text-accent">•</span> AI/ML{" "}
            <span className="text-accent">•</span> FULL-STACK DEVELOPMENT
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.2rem]">
            {"Hi, I\u2019m Zahra \u{1F44B}"}
          </h1>

          <p className="mt-4 font-display text-xl text-muted-foreground sm:text-2xl">
            Computer Science Student &amp; Developer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.08rem]">
            Computer Science and Engineering student passionate about building
            intelligent, practical, and user-focused software with AI, full-stack
            development, and modern technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-accent)] hover:brightness-110"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent hover:text-rose"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 border-t border-border pt-6">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              CONNECT
            </span>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <SystemVisual />
        </Reveal>
      </div>
    </section>
  );
}

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const cls =
    "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-rose";
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className={cls} title="GitHub">
        <Github className="h-4 w-4" />
        {compact ? null : <span>GitHub</span>}
      </span>
      <span className={cls} title="LinkedIn">
        <Linkedin className="h-4 w-4" />
        {compact ? null : <span>LinkedIn</span>}
      </span>
      <a className={cls} href={`mailto:${EMAIL}`}>
        <Mail className="h-4 w-4" />
        {compact ? null : <span>Email</span>}
      </a>
    </div>
  );
}

/* --------------------------------- ABOUT --------------------------------- */

const FOCUS = ["AI/ML", "Full-Stack Development", "Cybersecurity"];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        index="01"
        label="About Me"
        heading="Curious about systems that make technology feel more human."
        description="I'm pursuing a B.Tech in Computer Science and Engineering at SVNIT, Surat. My interests sit at the intersection of AI/ML, full-stack development, and cybersecurity — where thoughtful engineering can make technology more practical and impactful."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal className="group sm:col-span-2 lg:col-span-1">
          <div className="surface-card relative h-full overflow-hidden p-7">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 accent-rule"
            />
            <p className="font-display text-5xl font-semibold tracking-tight text-rose">
              8.61
            </p>
            <p className="mt-2 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground">
              CGPA
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              B.Tech CSE at SVNIT, Surat.
            </p>
          </div>
        </Reveal>

        {FOCUS.map((f, i) => (
          <Reveal key={f} delay={(i + 1) * 80} className="group">
            <div className="surface-card flex h-full flex-col justify-between p-7">
              <span className="font-mono text-[0.68rem] tracking-[0.2em] text-accent">
                {`0${i + 1}`}
              </span>
              <p className="mt-10 font-display text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-rose">
                {f}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- EXPERIENCE ------------------------------- */

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="02"
        label="Experience"
        heading="Building with intention, learning in the real world."
      />

      <Reveal className="group mt-12">
        <article className="surface-card grid gap-6 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
            <span className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-[0.72rem] tracking-wide text-rose">
              June 2026 – July 2026
            </span>
            <span
              aria-hidden="true"
              className="mt-3 hidden h-16 w-px accent-rule opacity-60 lg:block"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
              Web Development &amp; Cybersecurity Intern
            </h3>
            <p className="mt-2 text-sm text-accent">
              NeoAman Integrated Computer Solutions, Kuwait
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Assisted in web development security assessments and technical
              documentation while collaborating with the technical team.
            </p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

/* -------------------------------- TOOLKIT -------------------------------- */

const SKILLS: { title: string; items: string[]; featured?: boolean }[] = [
  { title: "Languages", items: ["Python", "C", "C++", "JavaScript", "TypeScript"] },
  { title: "Frontend", items: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend & Database", items: ["FastAPI", "REST APIs", "PostgreSQL"] },
  {
    title: "AI / ML",
    featured: true,
    items: [
      "Machine Learning",
      "NLP",
      "Sentiment Analysis",
      "Recommendation Systems",
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "Android Studio", "Figma"] },
];

export function Toolkit() {
  return (
    <Section id="skills">
      <SectionHeader
        index="04"
        label="Toolkit"
        heading="A versatile foundation for building what's next."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className={`group h-full${group.featured ? " md:col-span-2 lg:row-span-2" : ""}`}
          >
            <div
              className={`surface-card flex h-full flex-col p-6 sm:p-7${
                group.featured ? " bg-elevated/60" : ""
              }`}
            >
              {group.featured ? (
                <span
                  aria-hidden="true"
                  className="mb-5 block h-0.5 w-12 accent-rule"
                />
              ) : null}
              <h3
                className={`font-display font-semibold tracking-tight ${
                  group.featured ? "text-2xl text-rose" : "text-lg"
                }`}
              >
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
              {group.featured ? (
                <p className="mt-auto pt-6 text-sm leading-relaxed text-muted-foreground">
                  The core of my work — the foundation behind ShopWise AI and the
                  AI-Based Fall Detection System.
                </p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- LEADERSHIP ------------------------------- */

const LEADERSHIP = [
  {
    org: "Nexus, SVNIT",
    role: "Event Lead (Core Member)",
    period: "2026 – Present",
    text: "Planned and managed technical events, coordinated with cross-functional teams, and ensured smooth execution of events and student engagement.",
  },
  {
    org: "TEDxSVNIT",
    role: "Sponsorship & Finance Team",
    text: "Managed sponsorship outreach and financial coordination for a large-scale student-led event.",
  },
  {
    org: "Developer Student Clubs (DSC), SVNIT",
    role: "Junior Developer",
    text: "Contributed to technical initiatives and collaborative development tasks.",
  },
];

export function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeader
        index="05"
        label="Leadership & Involvement"
        heading="A community-minded way of learning and leading."
      />

      <ol className="mt-12 border-l border-border pl-6 sm:pl-10">
        {LEADERSHIP.map((item, i) => (
          <Reveal as="li" key={item.org} delay={i * 90} className="group relative pb-10 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[calc(1.5rem+4.5px)] h-2 w-2 rounded-full bg-accent sm:-left-[calc(2.5rem+4.5px)]"
            />
            <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
              <div className="min-w-0">
                <h3 className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-rose sm:text-[1.35rem]">
                  {item.org}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
              </div>
              {item.period ? (
                <span className="font-mono text-[0.7rem] tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              ) : null}
            </div>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* -------------------------------- EDUCATION ------------------------------- */

export function Education() {
  return (
    <Section id="education">
      <SectionHeader index="06" label="Education" heading="Academic foundations." />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="group">
          <div className="surface-card relative h-full overflow-hidden p-7 sm:p-9">
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-0.5 accent-rule" />
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-rose">
              CURRENT
            </span>
            <h3 className="mt-4 font-display text-2xl leading-snug font-semibold tracking-tight">
              Sardar Vallabhbhai National Institute of Technology, Surat
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="mt-6 font-display text-4xl font-semibold text-foreground">
              8.61
              <span className="ml-2 font-sans text-sm font-normal tracking-widest text-muted-foreground">
                CGPA
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="group">
          <div className="surface-card h-full p-7 sm:p-9">
            <span className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-foreground">
              PREVIOUS
            </span>
            <h3 className="mt-4 font-display text-xl leading-snug font-semibold tracking-tight">
              Fahaheel Al Watanieh Indian Private School, Kuwait
            </h3>
            <dl className="mt-6 divide-y divide-border border-t border-border">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm text-muted-foreground">CBSE Class XII</dt>
                <dd className="font-display text-lg font-semibold text-rose">95.4%</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm text-muted-foreground">CBSE Class X</dt>
                <dd className="font-display text-lg font-semibold text-rose">94.6%</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* --------------------------------- CONTACT -------------------------------- */

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="surface-card relative overflow-hidden p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--accent) 45%, transparent), transparent 70%)",
            }}
          />
          <span className="section-label">
            <span className="text-accent">07</span>
            <span aria-hidden="true" className="h-px w-6 accent-rule" />
            Contact
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-[1.12] font-semibold tracking-tight text-balance sm:text-4xl lg:text-[3rem]">
            Let's build something great together.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
            I'm always interested in exploring new ideas, building meaningful
            projects, and connecting with people in technology.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-accent)] hover:brightness-110"
            >
              Let's Connect
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-sm break-all text-muted-foreground transition-colors hover:text-rose"
            >
              {EMAIL}
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <SocialLinks />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* --------------------------------- FOOTER --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-lg font-semibold tracking-tight">
            Zahara Ishak Dalal
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Computer Science • AI/ML • Full-Stack Development
          </p>
        </div>
        <SocialLinks compact />
      </div>
    </footer>
  );
}
