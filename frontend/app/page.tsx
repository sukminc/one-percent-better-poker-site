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
    label: "Your pattern",
    value: "Tagged",
    detail: "See the leak that repeats.",
  },
  {
    label: "Fish pattern",
    value: "Mapped",
    detail: "Spot what they keep doing.",
  },
  {
    label: "Edge gained",
    value: "+1%",
    detail: "Get better than yesterday.",
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
                Find the leak.
                <br />
                Exploit it.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-secondary)]">
                You are 1% better than yesterday.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#product"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  See the product
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
                  Live concept
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
                      Session edge
                    </p>
                    <p className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">
                      +1.0%
                    </p>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    Better than yesterday
                  </p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                  <div className="score-bar h-full w-[68%] rounded-full" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Leak found", "River overfold"],
                    ["Fish tag", "Calls too wide"],
                    ["Best exploit", "Value bet thinner"],
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

      <section id="product" className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="product-strip rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  One product. One promise.
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  See your pattern.
                  <br />
                  Beat theirs.
                </h2>
                <p className="mt-5 text-base leading-7 text-[var(--color-secondary)]">
                  Your hands. Their leaks. A clearer exploit decision.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["You", "Repeated mistakes become visible."],
                  ["Pool", "Fish patterns stay easy to punish."],
                  ["Result", "Every session moves you +1%."],
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
