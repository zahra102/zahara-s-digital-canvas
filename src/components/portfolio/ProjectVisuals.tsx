const FLOW = ["Preference", "AI", "Sentiment", "NLP", "Recommendation"];

export function ShopWiseVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.68rem] tracking-[0.2em] text-muted-foreground">
          PRODUCT INTELLIGENCE
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent node-pulse" />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-3 transition-transform duration-500 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="mx-auto h-14 w-8 rounded-[4px] border border-border-strong bg-elevated" />
            <div className="mt-3 h-1.5 w-full rounded-full bg-elevated">
              <div
                className="h-full rounded-full accent-rule"
                style={{ width: `${[86, 64, 48][i]}%` }}
              />
            </div>
            <p className="mt-2 font-mono text-[0.6rem] text-muted-foreground">
              match {[86, 64, 48][i]}%
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2">
        {FLOW.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-border bg-elevated/70 px-2.5 py-1 font-mono text-[0.62rem] tracking-wide text-foreground">
              {step}
            </span>
            {i < FLOW.length - 1 ? (
              <span aria-hidden="true" className="h-px w-4 accent-rule opacity-70" />
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PoseVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-4">
      <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden="true">
        <g stroke="var(--border)" strokeWidth="0.5" opacity="0.6">
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1={i * 50} y1="0" x2={i * 50} y2="130" />
          ))}
        </g>
        <rect
          x="52"
          y="24"
          width="96"
          height="84"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.9"
          strokeDasharray="5 5"
          opacity="0.7"
        />
        <g stroke="var(--rose)" strokeWidth="1.4" fill="none" strokeLinecap="round">
          <path d="M100 44 L100 70 M100 70 L86 92 M100 70 L114 92 M100 52 L82 62 M100 52 L118 62" />
        </g>
        <g fill="var(--accent)">
          {[
            [100, 38],
            [100, 52],
            [100, 70],
            [82, 62],
            [118, 62],
            [86, 92],
            [114, 92],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.6" className="node-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </g>
        <text
          x="54"
          y="118"
          fill="var(--muted-foreground)"
          fontSize="6"
          fontFamily="var(--font-mono)"
          letterSpacing="1.2"
        >
          POSE TRACKING · FRAME STREAM
        </text>
      </svg>
    </div>
  );
}

export function BudgetVisual() {
  const bars = [40, 68, 32, 84, 56, 72];
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-muted-foreground">
          BALANCE
        </span>
        <span className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.6rem] text-rose">
          LOW ALERT
        </span>
      </div>
      <div className="mt-5 flex h-24 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-elevated transition-all duration-500"
            style={{ height: `${h}%` }}
          >
            {i === 3 ? <div className="h-full w-full rounded-t-sm accent-rule" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[0.62rem] text-muted-foreground">
        <span className="rounded-md border border-border px-2 py-1">daily log</span>
        <span className="rounded-md border border-border px-2 py-1">tax calc</span>
      </div>
    </div>
  );
}

export function BloomVisual() {
  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/60 p-5">
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="h-1.5 w-16 rounded-full accent-rule" />
        <div className="mt-3 h-1.5 w-full rounded-full bg-elevated" />
        <div className="mt-2 h-1.5 w-3/5 rounded-full bg-elevated" />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card p-3 transition-transform duration-500 group-hover:-translate-y-1"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-elevated" />
              <span className="h-1.5 w-10 rounded-full bg-elevated" />
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-elevated" />
            <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-elevated" />
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground">
        TESTIMONIALS · DYNAMIC CONTENT
      </p>
    </div>
  );
}
