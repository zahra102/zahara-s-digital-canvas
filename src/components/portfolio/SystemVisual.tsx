import { useState } from "react";

const LAYERS = [
  { key: "ai", label: "AI / ML", meta: "models · inference", detail: "Recommendation, NLP and model-driven product intelligence." },
  { key: "stack", label: "FULL-STACK", meta: "api · interface", detail: "Interfaces connected to APIs, data and practical user workflows." },
  { key: "sec", label: "SECURITY", meta: "review · hardening", detail: "Security-minded engineering, reviews and safer system design." },
];

export function SystemVisual() {
  const [active, setActive] = useState("ai");
  const current = LAYERS.find((l) => l.key === active) ?? LAYERS[0];

  return (
    <div className="relative hero-system-wrap">
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-50 blur-3xl" style={{ background: "radial-gradient(60% 60% at 70% 30%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 70%)" }} />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] hero-system">
        <div className="flex items-center justify-between border-b border-border bg-elevated/60 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2"><span className="h-2 w-2 shrink-0 rounded-full bg-accent node-pulse" /><span className="truncate font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground">SYSTEM / ZAHRA.D</span></div>
          <span className="shrink-0 font-mono text-[0.65rem] tracking-widest text-rose">ONLINE</span>
        </div>
        <div className="system-visual relative">
          <div aria-hidden="true" className="scan-line" />
          <svg viewBox="0 0 400 220" className="h-auto w-full" role="img" aria-label="Interactive abstract system diagram">
            <defs><linearGradient id="edge" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--primary)" /><stop offset="100%" stopColor="var(--accent)" /></linearGradient></defs>
            <g stroke="var(--border)" strokeWidth="0.6" opacity="0.5">{Array.from({ length: 9 }).map((_, i) => <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />)}{Array.from({ length: 5 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />)}</g>
            <g stroke="url(#edge)" strokeWidth="1.4" fill="none" className="flow-line"><path d="M60 165 C 120 165, 120 60, 200 60" /><path d="M60 165 C 130 165, 150 110, 200 110" /><path d="M200 60 C 270 60, 280 110, 330 110" /><path d="M200 110 C 260 110, 280 165, 330 165" /><path d="M200 160 C 250 160, 270 120, 330 110" /></g>
            <g fill="var(--accent)">{[[60,165],[200,60],[200,110],[200,160],[330,110],[330,165]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="9" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.35" className="node-pulse" style={{ animationDelay: `${i * 0.45}s` }} /><circle cx={x} cy={y} r="3.4" className="node-core" /></g>)}</g>
            <g fill="var(--muted-foreground)" fontSize="7.5" fontFamily="var(--font-mono)" letterSpacing="1.4"><text x="30" y="190">INPUT</text><text x="178" y="42">MODEL</text><text x="178" y="196">DATA</text><text x="306" y="192">OUTPUT</text></g>
            <g className="data-particles" fill="var(--rose)"><circle cx="112" cy="143" r="1.4" /><circle cx="151" cy="126" r="1.2" /><circle cx="250" cy="82" r="1.3" /><circle cx="286" cy="128" r="1.1" /><circle cx="246" cy="176" r="1.2" /></g>
          </svg>
        </div>
        <div className="border-t border-border bg-border p-px"><div className="grid gap-px bg-border sm:grid-cols-3">{LAYERS.map((l)=><button key={l.key} type="button" onClick={()=>setActive(l.key)} className={`layer-tile group bg-card px-4 py-4 text-left transition-all duration-300 hover:bg-elevated ${active === l.key ? "active-layer" : ""}`}><p className="font-mono text-[0.7rem] tracking-[0.18em] text-foreground group-hover:text-accent">{l.label}</p><p className="mt-1.5 text-xs text-muted-foreground">{l.meta}</p></button>)}</div></div>
        <div className="border-t border-border bg-elevated/30 px-4 py-3"><p className="font-mono text-[0.55rem] tracking-[0.12em] text-muted-foreground"><span className="text-rose">ACTIVE LAYER · {current.label}</span> · {current.detail}</p></div>
      </div>
    </div>
  );
}
