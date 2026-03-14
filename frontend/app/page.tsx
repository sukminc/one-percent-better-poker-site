const tiers = [
  {
    label: "Open",
    amount: "$30",
    note: "Support the first build.",
    href: "https://buy.stripe.com/fZu8wQbT81DO8dIf6I1wY00",
  },
  {
    label: "3-Bet",
    amount: "$150",
    note: "Push the product faster.",
    href: "https://buy.stripe.com/5kQbJ20aqeqA51w4s41wY01",
  },
  {
    label: "All-In",
    amount: "$2,000",
    note: "Back the whole run.",
    href: "https://buy.stripe.com/28EfZi3mCfuE1Pk7Eg1wY03",
  },
];

const signals = [
  {
    label: "One tournament",
    value: "1",
    detail: "Review a single tournament first.",
  },
  {
    label: "Three habits",
    value: "3",
    detail: "Catch the patterns you repeat.",
  },
  {
    label: "One adjustment",
    value: "1",
    detail: "Leave with one next-session change.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <section className="hero-shell px-6 pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                1% Better Poker
              </p>
            </div>
            <a
              href="#back"
              className="inline-flex items-center rounded-full border border-[rgba(255,255,255,0.14)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[rgba(228,29,45,0.12)]"
            >
              Back it
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.02fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center rounded-full bg-[rgba(228,29,45,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Exploit Better
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl sm:leading-[0.92]">
                One tournament.
                <br />
                Three habits.
                <br />
                One adjustment.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-secondary)]">
                A poker coach built from your pattern.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#philosophy"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  See the idea
                </a>
                <a
                  href="#back"
                  className="rounded-full border border-[rgba(255,255,255,0.14)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[var(--color-accent)] hover:bg-[rgba(228,29,45,0.12)]"
                >
                  Fund the build
                </a>
              </div>
            </div>

            <div className="score-panel rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Final product direction
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">
                    Exploit Better
                  </p>
                </div>
                <div className="rounded-full bg-[rgba(228,29,45,0.16)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                  MVP
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {signals.map((signal) => (
                  <div key={signal.label} className="score-mini-card rounded-[1.4rem] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {signal.label}
                    </p>
                    <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {signal.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
                      {signal.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      Sample review
                    </p>
                    <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">
                      Your 3 leaks
                    </p>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    Next session: 1 change
                  </p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                  <div className="score-bar h-full w-[68%] rounded-full" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Habit 01", "Overfolded rivers after passive turn lines"],
                    ["Habit 02", "Checked back thin value too often vs calling stations"],
                    ["Adjustment", "Value bet thinner next session against wide callers"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.02)] px-4 py-4"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="product-strip rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Why this exists
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Real poker is habit.
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--color-secondary)]">
                  GTO studies perfect theory. Real players repeat patterns.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "The gap",
                    "You are not playing against perfect theory. You are playing against habits, timing, fear, and repeated mistakes.",
                  ],
                  [
                    "The table",
                    "You do not know what everyone is doing behind the monitor. But their patterns repeat. That is enough.",
                  ],
                  [
                    "The truth",
                    "You can not control the whole table. You can control your own pattern.",
                  ],
                  [
                    "The goal",
                    "Know your pattern. Catch theirs. Grow 1% at a time.",
                  ],
                ].map(([label, copy]) => (
                  <div
                    key={label}
                    className="score-mini-card rounded-[1.5rem] border border-[var(--color-line)] p-5"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      {label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-secondary)]">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="back" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="score-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Back the build
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Back the tool.
                </h2>
                <p className="mt-4 max-w-sm text-base leading-7 text-[var(--color-secondary)]">
                  Help ship Exploit Better faster.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {tiers.map((tier) => (
                  <a
                    key={tier.label}
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="score-tier rounded-[1.5rem] p-5 transition-transform hover:-translate-y-1"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {tier.label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                      {tier.amount}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-secondary)]">
                      {tier.note}
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
