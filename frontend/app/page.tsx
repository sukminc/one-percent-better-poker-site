const products = [
  {
    name: "Exploit Better",
    eyebrow: "Pattern engine",
    pitch: "See your leaks. Tag fish patterns. Train exploit responses.",
    bullets: [
      "Your patterns",
      "Fish labels",
      "Edge over time",
    ],
    mockup: "exploit",
  },
  {
    name: "Action Keeper",
    eyebrow: "Action record",
    pitch: "Turn verbal swaps and staking into signed, timestamped records.",
    bullets: [
      "Swap terms",
      "Signed action",
      "Cleaner payouts",
    ],
    mockup: "action",
  },
];

const tiers = [
  {
    label: "Open",
    amount: "$30",
    href: "https://buy.stripe.com/fZu8wQbT81DO8dIf6I1wY00",
  },
  {
    label: "3-Bet",
    amount: "$150",
    href: "https://buy.stripe.com/5kQbJ20aqeqA51w4s41wY01",
  },
  {
    label: "All-In",
    amount: "$2,000",
    href: "https://buy.stripe.com/28EfZi3mCfuE1Pk7Eg1wY03",
  },
];

function ProductMockup({ type }: { type: "exploit" | "action" }) {
  if (type === "exploit") {
    return (
      <div className="panel-glow rounded-[1.5rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(8,11,10,0.55)] p-5">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-muted)]">
          <span>Pattern board</span>
          <span>Live edge map</span>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.2rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="flex gap-2">
              {["VPIP leak", "River overfold", "Fish aggro"].map((tag) => (
                <span
                  key={tag}
                  className="chip-outline rounded-full px-2 py-1 text-[9px] font-mono uppercase tracking-[0.12em] text-[var(--color-accent)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Leak severity", 84],
                ["Fish certainty", 73],
                ["Exploit confidence", 91],
              ].map(([label, width]) => (
                <div key={label as string}>
                  <div className="flex items-center justify-between text-[11px] text-[var(--color-secondary)]">
                    <span>{label as string}</span>
                    <span className="font-mono text-[var(--color-muted)]">{width}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[rgba(57,82,68,0.45)]">
                    <div className="metric-bar h-full rounded-full" style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.2rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
            <div className="grid grid-cols-5 gap-2">
              {[
                "#d3b46f", "#6f9778", "#d3b46f", "#26352d", "#d3b46f",
                "#26352d", "#6f9778", "#d3b46f", "#6f9778", "#26352d",
                "#d3b46f", "#26352d", "#6f9778", "#d3b46f", "#6f9778",
              ].map((color, index) => (
                <div
                  key={index}
                  className="h-11 rounded-xl border border-[rgba(57,82,68,0.55)]"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--color-secondary)]">
              <span>Fish board</span>
              <span className="font-mono text-[var(--color-accent)]">+1% pattern edge</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="panel-glow rounded-[1.5rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(8,11,10,0.55)] p-5">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-muted)]">
        <span>Action flow</span>
        <span>Signed + stamped</span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[1.2rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
          <div className="space-y-3">
            {[
              "10% swap",
              "2 bullets declared",
              "Payout rule locked",
            ].map((line, index) => (
              <div key={line} className="flex items-center gap-3 rounded-xl border border-[rgba(57,82,68,0.55)] px-3 py-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(211,180,111,0.12)] text-[10px] font-mono text-[var(--color-accent)]">
                  0{index + 1}
                </span>
                <span className="text-sm text-[var(--color-secondary)]">{line}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[1.2rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
          <div className="rounded-[1rem] border border-[rgba(211,180,111,0.18)] bg-[rgba(211,180,111,0.06)] px-4 py-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)]">
              Action receipt
            </p>
            <div className="mt-3 space-y-2 text-sm text-[var(--color-secondary)]">
              <div className="flex justify-between"><span>Deal</span><span>10% swap</span></div>
              <div className="flex justify-between"><span>Scope</span><span>Locked</span></div>
              <div className="flex justify-between"><span>Status</span><span>Signed</span></div>
              <div className="flex justify-between"><span>Time</span><span>22:41 EST</span></div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-[11px] text-[var(--color-secondary)]">
            <span>No more “I thought we meant…”</span>
            <span className="font-mono text-[var(--color-accent)]">Docusign for action</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[var(--color-foreground)]">
      <section className="table-grid relative overflow-hidden px-6 pb-20 pt-10 sm:pb-24 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 border-b border-[rgba(57,82,68,0.6)] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                1% Better Poker
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                OnePercentBetter.poker
              </h1>
            </div>
            <a
              href="https://pokerdb.thehendonmob.com/player.php?a=r&n=558957"
              target="_blank"
              rel="noopener noreferrer"
              className="chip-outline inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-accent)]"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Live results
            </a>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="max-w-3xl text-5xl font-semibold tracking-[-0.08em] text-[#f4f6ef] sm:text-7xl sm:leading-[0.9]">
                Exploit the leak.
                <br />
                Lock the action.
              </p>
              <p className="mt-7 max-w-xl text-base leading-7 text-[var(--color-secondary)] sm:text-lg">
                Two products. One for pattern edge. One for staking clarity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="#products"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 font-medium text-[#0b0f0d] transition-transform hover:-translate-y-0.5"
                >
                  View products
                </a>
                <a
                  href="#back"
                  className="rounded-full border border-[rgba(211,180,111,0.35)] bg-[rgba(211,180,111,0.08)] px-5 py-3 text-[var(--color-accent)] transition-colors hover:bg-[rgba(211,180,111,0.12)]"
                >
                  Back the build
                </a>
              </div>
            </div>

            <div className="card-float panel-glow rounded-[2rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(8,11,10,0.5)] p-5 sm:p-6">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-muted)]">
                <span>Product preview</span>
                <span className="text-[var(--color-accent)]">Final direction</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.3rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Exploit Better
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      ["Leak score", 82],
                      ["Fish label confidence", 74],
                      ["Exploit fit", 91],
                    ].map(([label, width]) => (
                      <div key={label as string}>
                        <div className="flex items-center justify-between text-[11px] text-[var(--color-secondary)]">
                          <span>{label as string}</span>
                          <span className="font-mono text-[var(--color-muted)]">{width}%</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[rgba(57,82,68,0.45)]">
                          <div className="metric-bar h-full rounded-full" style={{ width: `${width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[1.3rem] border border-[rgba(57,82,68,0.72)] bg-[rgba(255,255,255,0.02)] p-4">
                  <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--color-accent)]">
                    Action Keeper
                  </p>
                  <div className="mt-4 space-y-3">
                    {["Swap % locked", "Bullet count declared", "Signed payout rule"].map((line) => (
                      <div key={line} className="rounded-xl border border-[rgba(57,82,68,0.55)] px-3 py-3 text-sm text-[var(--color-secondary)]">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-5">
          {products.map((product) => (
            <article key={product.name} className="felt-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {product.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-5xl">
                    {product.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-secondary)] sm:text-lg">
                    {product.pitch}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.bullets.map((bullet) => (
                      <span
                        key={bullet}
                        className="chip-outline rounded-full px-3 py-2 text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--color-accent)]"
                      >
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
                <ProductMockup type={product.mockup as "exploit" | "action"} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="back" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="felt-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Back the build
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-5xl">
                  If you want this faster, back it.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {tiers.map((tier) => (
                  <a
                    key={tier.label}
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-glow rounded-[1.6rem] border border-[rgba(211,180,111,0.24)] bg-[rgba(211,180,111,0.07)] p-6 transition-transform hover:-translate-y-1"
                  >
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {tier.label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-accent)]">
                      {tier.amount}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
