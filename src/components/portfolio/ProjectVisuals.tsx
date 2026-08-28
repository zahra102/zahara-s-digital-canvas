import { useEffect, useState } from "react";

const FLOW = ["Preference", "AI", "Sentiment", "NLP", "Recommendation"];

const POSES = [
  {
    name: "STANDING",
    risk: "SAFE",
    points: [
      [100, 38], [100, 52], [100, 70], [82, 62], [118, 62], [88, 92], [112, 92],
    ],
    lines: ["M100 44 L100 70", "M100 52 L82 62", "M100 52 L118 62", "M100 70 L88 92", "M100 70 L112 92"],
  },
  {
    name: "MOVING",
    risk: "MONITOR",
    points: [
      [100, 38], [100, 52], [100, 70], [82, 60], [118, 66], [72, 86], [126, 92],
    ],
    lines: ["M100 44 L100 70", "M100 52 L82 60", "M100 52 L118 66", "M100 70 L72 86", "M100 70 L126 92"],
  },
  {
    name: "FALL EVENT",
    risk: "ALERT",
    points: [
      [72, 72], [88, 78], [108, 84], [98, 62], [120, 66], [132, 48], [146, 52],
    ],
    lines: ["M76 72 L108 84", "M88 78 L98 62", "M98 62 L120 66", "M108 84 L132 48", "M108 84 L146 52"],
  },
  {
    name: "RECOVERING",
    risk: "MONITOR",
    points: [
      [98, 44], [100, 58], [104, 75], [84, 68], [120, 62], [86, 96], [126, 88],
    ],
    lines: ["M98 50 L104 75", "M100 58 L84 68", "M100 58 L120 62", "M104 75 L86 96", "M104 75 L126 88"],
  },
];

export function ShopWiseVisual() {
  const [active, setActive] = useState(0);
  const [query, setQuery] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

  const runAnalysis = () => {
    setAnalyzing(true);
    window.setTimeout(() => setAnalyzing(false), 900);
  };

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-foreground">
          PRODUCT INTELLIGENCE
        </span>
        <span className="flex items-center gap-2 font-mono text-[0.58rem] tracking-widest text-rose">
          <span className="h-1.5 w-1.5 rounded-full bg-accent node-pulse" />
          LIVE
        </span>
      </div>

      <div className="mt-4 flex gap-1 rounded-lg border border-border bg-card p-1">
        {["Recommend", "Sentiment", "Insights"].map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(i)}
            className={`flex-1 rounded-md px-2 py-1.5 font-mono text-[0.58rem] transition-all ${
              active === i ? "bg-elevated text-rose shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 0 ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[86, 72, 58].map((match, i) => (
            <button
              key={match}
              type="button"
              onClick={runAnalysis}
              className="project-mini-card rounded-lg border border-border bg-card p-2.5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="phone-mock mx-auto h-16 w-9 rounded-[5px] border border-border-strong bg-elevated" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-elevated">
                <div className="h-full rounded-full accent-rule" style={{ width: `${match}%` }} />
              </div>
              <p className="mt-1.5 font-mono text-[0.55rem] text-muted-foreground">match {match}%</p>
              <p className="mt-1 truncate text-[0.62rem] text-foreground">{["Nova X", "Pixel Air", "Zen Pro"][i]}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.58rem] tracking-[0.16em] text-muted-foreground">
              {active === 1 ? "REVIEW SIGNALS" : "AI PRODUCT INSIGHT"}
            </span>
            <span className="text-xs text-rose">{analyzing ? "ANALYZING…" : "READY"}</span>
          </div>
          <div className="mt-4 space-y-3">
            {["Performance", "Value", "User sentiment"].map((label, i) => (
              <div key={label}>
                <div className="mb-1 flex justify-between font-mono text-[0.56rem] text-muted-foreground">
                  <span>{label}</span><span>{[92, 81, 88][i]}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-elevated">
                  <div className="h-full rounded-full accent-rule transition-all duration-700" style={{ width: `${[92, 81, 88][i]}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={runAnalysis} className="mt-4 w-full rounded-md border border-border px-3 py-2 font-mono text-[0.58rem] text-muted-foreground transition-colors hover:border-accent hover:text-rose">
            Run AI analysis ↗
          </button>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") runAnalysis(); }}
          placeholder="Describe your ideal phone…"
          aria-label="Describe your ideal phone"
          className="min-w-0 flex-1 rounded-md border border-border bg-card px-3 py-2 text-[0.65rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
        />
        <button type="button" onClick={runAnalysis} className="rounded-md bg-primary px-3 py-2 font-mono text-[0.58rem] text-primary-foreground transition-transform hover:-translate-y-0.5">
          {analyzing ? "…" : "AI"}
        </button>
      </div>

      <ul className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2">
        {FLOW.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className={`rounded-md border px-2 py-1 font-mono text-[0.55rem] tracking-wide transition-colors ${i === active + 1 ? "border-accent/50 bg-accent/10 text-rose" : "border-border bg-elevated/70 text-foreground"}`}>
              {step}
            </span>
            {i < FLOW.length - 1 ? <span aria-hidden="true" className="h-px w-3 accent-rule opacity-70" /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PoseVisual() {
  const [pose, setPose] = useState(0);
  const current = POSES[pose] ?? POSES[0]!;

  useEffect(() => {
    const id = window.setInterval(() => setPose((p) => (p + 1) % POSES.length), 1800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-4">
      <div className="absolute inset-x-4 top-3 z-10 flex items-center justify-between font-mono text-[0.55rem] tracking-[0.16em]">
        <span className="text-muted-foreground">CAM 01 · FRAME {String(pose + 1).padStart(2, "0")}</span>
        <span className={current.risk === "ALERT" ? "text-rose alert-blink" : "text-accent"}>{current.risk}</span>
      </div>
      <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--border)" strokeWidth="0.5" opacity="0.6">
          {Array.from({ length: 5 }).map((_, i) => <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="130" />)}
        </g>
        <rect x="52" y="24" width="96" height="84" fill="none" stroke="var(--accent)" strokeWidth="0.9" strokeDasharray="5 5" opacity="0.7" className={current.risk === "ALERT" ? "danger-box" : ""} />
        <g stroke="var(--rose)" strokeWidth="1.4" fill="none" strokeLinecap="round" className="pose-transition">
          {current.lines.map((d) => <path key={d} d={d} />)}
        </g>
        <g fill="var(--accent)">
          {current.points.map(([x, y], i) => <circle key={`${x}-${y}-${i}`} cx={x} cy={y} r="2.6" className="node-pulse" style={{ animationDelay: `${i * 0.18}s` }} />)}
        </g>
        <text x="54" y="118" fill="var(--muted-foreground)" fontSize="6" fontFamily="var(--font-mono)" letterSpacing="1.2">
          {current.name} · MEDIAPIPE
        </text>
      </svg>
    </div>
  );
}

export function BudgetVisual() {
  const bars = [40, 68, 32, 84, 56, 72];
  const [selected, setSelected] = useState(3);
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground">BALANCE</span>
        <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.6rem] text-rose">LOW ALERT</span>
      </div>
      <div className="mt-5 flex h-24 items-end gap-2 budget-bars">
        {bars.map((h, i) => (
          <button key={i} type="button" aria-label={`Expense day ${i + 1}`} onMouseEnter={() => setSelected(i)} onFocus={() => setSelected(i)} className="group/budget relative flex flex-1 items-end rounded-t-sm bg-elevated" style={{ height: `${h}%` }}>
            <span className={`block h-full w-full rounded-t-sm transition-all duration-300 ${selected === i ? "accent-rule" : "bg-elevated"}`} />
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-card px-1.5 py-1 font-mono text-[0.5rem] text-muted-foreground opacity-0 transition-opacity group-hover/budget:opacity-100">₹{[420, 690, 330, 860, 570, 740][i]}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[0.62rem] text-muted-foreground">
        <span className="rounded-md border border-border px-2 py-1">daily log</span>
        <span className="rounded-md border border-border px-2 py-1">tax calc</span>
      </div>
      <p className="mt-3 font-mono text-[0.55rem] tracking-wide text-muted-foreground">SELECTED DAY · {selected + 1} · EXPENSE PATTERN</p>
    </div>
  );
}

export function BloomVisual() {
  const testimonials = ["Fast, polished, memorable.", "The brand finally feels alive.", "Simple experience, strong identity."];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % testimonials.length), 2600);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="h-1.5 w-16 rounded-full accent-rule" />
        <div className="mt-3 h-1.5 w-full rounded-full bg-elevated" />
        <div className="mt-2 h-1.5 w-3/5 rounded-full bg-elevated" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 testimonial-grid">
        {testimonials.slice(0, 2).map((text, i) => (
          <button key={text} type="button" onClick={() => setActive((active + i + 1) % testimonials.length)} className={`project-mini-card rounded-lg border bg-card p-3 text-left transition-all duration-500 ${i === 0 ? "border-accent/40" : "border-border"}`}>
            <div className="flex items-center gap-2"><span className="h-5 w-5 rounded-full bg-elevated" /><span className="h-1.5 w-10 rounded-full bg-elevated" /></div>
            <p className="mt-3 text-[0.62rem] leading-relaxed text-muted-foreground">{i === 0 ? testimonials[active] : text}</p>
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {testimonials.map((_, i) => <button key={i} type="button" aria-label={`Show testimonial ${i + 1}`} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all ${active === i ? "w-6 accent-rule" : "w-2 bg-elevated"}`} />)}
      </div>
      <p className="mt-3 font-mono text-[0.58rem] tracking-[0.18em] text-muted-foreground">TESTIMONIALS · DYNAMIC CONTENT</p>
    </div>
  );
}
