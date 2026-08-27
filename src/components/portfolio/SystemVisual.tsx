const LAYERS = [
  { key: "ai", label: "AI / ML", meta: "models · inference" },
  { key: "stack", label: "FULL-STACK", meta: "api · interface" },
  { key: "sec", label: "SECURITY", meta: "review · hardening" },
];

export function SystemVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 30%, color-mix(in oklab, var(--accent) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between border-b border-border bg-elevated/60 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
            <span className="truncate font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground">
              SYSTEM / ZAHRA.D
            </span>
          </div>
          <span className="shrink-0 font-mono text-[0.65rem] tracking-widest text-rose">
            ONLINE
          </span>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 400 220"
            className="h-auto w-full"
            role="img"
            aria-label="Abstract diagram of nodes and connections representing AI, full-stack and security layers"
          >
            <defs>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--accent)" />
              </linearGradient>
            </defs>

            <g stroke="var(--border)" strokeWidth="0.6" opacity="0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="220" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 55} x2="400" y2={i * 55} />
              ))}
            </g>

            <g stroke="url(#edge)" strokeWidth="1.4" fill="none" className="flow-line">
              <path d="M60 165 C 120 165, 120 60, 200 60" />
              <path d="M60 165 C 130 165, 150 110, 200 110" />
              <path d="M200 60 C 270 60, 280 110, 330 110" />
              <path d="M200 110 C 260 110, 280 165, 330 165" />
              <path d="M200 160 C 250 160, 270 120, 330 110" />
            </g>

            <g fill="var(--accent)">
              {[
                [60, 165],
                [200, 60],
                [200, 110],
                [200, 160],
                [330, 110],
                [330, 165],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="9"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    opacity="0.35"
                    className="node-pulse"
                    style={{ animationDelay: `${i * 0.45}s` }}
                  />
                  <circle cx={x} cy={y} r="3.4" />
                </g>
              ))}
            </g>

            <g
              fill="var(--muted-foreground)"
              fontSize="7.5"
              fontFamily="var(--font-mono)"
              letterSpacing="1.4"
            >
              <text x="30" y="190">
                INPUT
              </text>
              <text x="178" y="42">
                MODEL
              </text>
              <text x="178" y="196">
                DATA
              </text>
              <text x="306" y="192">
                OUTPUT
              </text>
            </g>
          </svg>
        </div>

        <div className="grid gap-px border-t border-border bg-border sm:grid-cols-3">
          {LAYERS.map((l) => (
            <div
              key={l.key}
              className="group bg-card px-4 py-4 transition-colors duration-300 hover:bg-elevated"
            >
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-foreground transition-colors group-hover:text-accent">
                {l.label}
              </p>
              <p className="mt-1.5 text-xs text-muted-foreground">{l.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
