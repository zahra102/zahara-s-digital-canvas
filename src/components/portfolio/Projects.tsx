import { Reveal, Section, SectionHeader, Tag } from "./primitives";
import {
  BloomVisual,
  BudgetVisual,
  PoseVisual,
  ShopWiseVisual,
} from "./ProjectVisuals";

const SECONDARY = [
  {
    no: "02",
    title: "AI-Based Fall Detection System",
    description:
      "A real-time AI-based fall detection system using MediaPipe for human pose estimation and OpenCV for video processing, enabling automatic fall detection and instant caregiver alerts for improved elderly safety.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    Visual: PoseVisual,
  },
  {
    no: "03",
    title: "Budget Mate",
    description:
      "An expense-tracking application with daily expense logging, income-based balance calculation, low-balance alerts, and tax calculation.",
    tech: ["Android Studio"],
    Visual: BudgetVisual,
  },
  {
    no: "04",
    title: "Bloom Branding Website",
    description:
      "A responsive branding website with backend integration for storing and displaying client testimonials, enabling dynamic content management.",
    tech: ["Web Development"],
    Visual: BloomVisual,
  },
];

const SHOPWISE_TECH = [
  "React",
  "TypeScript",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "Machine Learning",
  "NLP",
  "Gemini AI",
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        index="03"
        label="Selected Work"
        heading="Intelligent ideas, shaped into practical products."
      />

      <Reveal className="group mt-12">
        <article className="surface-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
            <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] text-rose">
                    FEATURED PROJECT
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground">
                    AI PRODUCT INTELLIGENCE
                  </span>
                </div>
                <p className="mt-6 font-mono text-sm text-accent">01</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  ShopWise AI
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                  An AI-powered smartphone discovery platform with personalized
                  recommendations, sentiment analysis, and Gemini AI-powered product
                  insights.
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {SHOPWISE_TECH.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 border-b border-border bg-elevated/40 p-5 sm:p-6 lg:order-2 lg:border-b-0 lg:border-l lg:p-8">
              <ShopWiseVisual />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {SECONDARY.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 90}
            className={`group h-full${i === 2 ? " lg:col-span-2" : ""}`}
          >
            <article
              className={`surface-card flex h-full flex-col overflow-hidden${
                i === 2 ? " lg:grid lg:grid-cols-[1fr_1fr]" : ""
              }`}
            >
              <div
                className={`border-b border-border bg-elevated/40 p-5${
                  i === 2 ? " lg:order-2 lg:border-b-0 lg:border-l" : ""
                }`}
              >
                <div className="h-44">
                  <p.Visual />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-sm text-accent">{p.no}</p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
