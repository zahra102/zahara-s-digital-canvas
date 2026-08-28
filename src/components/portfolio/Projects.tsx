import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Reveal, Section, SectionHeader, Tag } from "./primitives";
import { BloomVisual, BudgetVisual, PoseVisual, ShopWiseVisual } from "./ProjectVisuals";

const SECONDARY = [
  { no: "02", title: "AI-Based Fall Detection System", description: "A real-time AI-based fall detection system using MediaPipe for human pose estimation and OpenCV for video processing, enabling automatic fall detection and instant caregiver alerts for improved elderly safety.", tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"], Visual: PoseVisual, detail: "A computer-vision workflow that tracks human pose landmarks frame by frame, detects risky motion patterns and can surface an alert for caregiver attention." },
  { no: "03", title: "Budget Mate", description: "An expense-tracking application with daily expense logging, income-based balance calculation, low-balance alerts, and tax calculation.", tech: ["Android Studio"], Visual: BudgetVisual, detail: "A practical personal-finance app concept focused on quick expense entry, balance visibility, low-balance awareness and tax calculations." },
  { no: "04", title: "Bloom Branding Website", description: "A responsive branding website with backend integration for storing and displaying client testimonials, enabling dynamic content management.", tech: ["Web Development"], Visual: BloomVisual, detail: "A responsive brand experience backed by dynamic testimonial content, showing how a polished interface can stay connected to real data." },
];

const SHOPWISE_TECH = ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Machine Learning", "NLP", "Gemini AI"];

export function Projects() {
  const [selected, setSelected] = useState<{ title: string; detail: string; tech: string[] } | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <Section id="projects">
      <SectionHeader index="03" label="Selected Work" heading="Intelligent ideas, shaped into practical products." />

      <Reveal className="group mt-12">
        <article className="surface-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
            <div className="order-2 flex flex-col justify-between p-6 sm:p-8 lg:order-1 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2"><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] text-rose">FEATURED PROJECT</span><span className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground">AI PRODUCT INTELLIGENCE</span></div>
                <p className="mt-6 font-mono text-sm text-accent">01</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">ShopWise AI</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">An AI-powered smartphone discovery platform with personalized recommendations, sentiment analysis, and Gemini AI-powered product insights.</p>
                <button type="button" onClick={() => setSelected({ title: "ShopWise AI", detail: "An AI-powered smartphone discovery platform combining personalized recommendation logic, sentiment analysis and Gemini AI-powered product insights into one user-focused experience.", tech: SHOPWISE_TECH })} className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-accent hover:text-rose hover:-translate-y-0.5">Explore project <ArrowUpRight className="h-3.5 w-3.5" /></button>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">{SHOPWISE_TECH.map((t)=><li key={t}><Tag>{t}</Tag></li>)}</ul>
            </div>
            <div className="order-1 border-b border-border bg-elevated/40 p-5 sm:p-6 lg:order-2 lg:border-b-0 lg:border-l lg:p-8"><ShopWiseVisual /></div>
          </div>
        </article>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {SECONDARY.map((p, i) => (
          <Reveal key={p.title} delay={i * 90} className={`group h-full${i === 2 ? " lg:col-span-2" : ""}`}>
            <article className={`surface-card flex h-full flex-col overflow-hidden${i === 2 ? " lg:grid lg:grid-cols-[1fr_1fr]" : ""}`}>
              <div className={`border-b border-border bg-elevated/40 p-5${i === 2 ? " lg:order-2 lg:border-b-0 lg:border-l" : ""}`}><div className="h-44"><p.Visual /></div></div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="font-mono text-sm text-accent">{p.no}</p><h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3><p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{p.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">{p.tech.map((t)=><li key={t}><Tag>{t}</Tag></li>)}</ul>
                <button type="button" onClick={() => setSelected({ title: p.title, detail: p.detail, tech: p.tech })} className="mt-auto pt-6 inline-flex w-fit items-center gap-2 text-xs font-mono text-muted-foreground transition-colors hover:text-rose">View interaction details <ArrowUpRight className="h-3.5 w-3.5" /></button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {selected ? (
        <div className="project-dialog fixed inset-0 z-[80] grid place-items-center p-5" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null); }}>
          <div className="project-dialog-panel w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-label={`${selected.title} details`}>
            <div className="flex items-start justify-between gap-4"><div><span className="font-mono text-[0.62rem] tracking-[0.18em] text-accent">PROJECT DETAIL</span><h3 className="mt-2 font-display text-2xl font-semibold">{selected.title}</h3></div><button type="button" onClick={() => setSelected(null)} aria-label="Close project details" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-accent hover:text-rose"><X className="h-4 w-4" /></button></div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{selected.detail}</p>
            <div className="mt-6 flex flex-wrap gap-2">{selected.tech.map((t)=><Tag key={t}>{t}</Tag>)}</div>
            <p className="mt-7 border-t border-border pt-5 font-mono text-[0.58rem] tracking-wide text-muted-foreground">INTERACTIVE DEMO ELEMENTS ARE BUILT INTO THE PROJECT VISUALS ABOVE.</p>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
