import Link from "next/link";

const productCards = [
  {
    name: "1% Better - Exploit Better",
    status: "Analytics tool",
    hook: "Analyze your patterns. Spot fish patterns. Get study signals GTO does not give you.",
    notes: [
      "Your leaks, tracked over time",
      "Fish-pattern detection",
      "More data, 1% better reads",
    ],
  },
  {
    name: "1% Better - Action Keeper",
    status: "Workflow tool",
    hook: "Turn verbal staking into signed, timestamped action records.",
    notes: [
      "Docusign-style action flow",
      "Cleaner agreements and receipts",
      "Less confusion, less trust friction",
    ],
  },
];

const signals = [
  {
    label: "Products",
    value: "2",
    body: "One analytics tool. One action workflow tool.",
  },
  {
    label: "Audience",
    value: "Players",
    body: "Built for serious players, not generic poker content.",
  },
  {
    label: "Status",
    value: "Open",
    body: "Founding backers are open before the first releases land.",
  },
];

const backingBenefits = [
  "Early access when the first tools ship",
  "Discounted founding pricing",
  "Priority updates as the tools tighten up",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[var(--color-foreground)]">
      <section className="table-grid relative overflow-hidden px-6 pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 border-b border-[rgba(57,82,68,0.6)] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Poker analytics and workflow tools
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                OnePercentBetter.poker
              </h1>
            </div>
            <div className="chip-outline inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Founding backers open
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-3xl text-5xl font-semibold tracking-[-0.07em] text-[#f4f6ef] sm:text-7xl sm:leading-[0.94]">
                Review cleaner.
                <br />
                Exploit better.
                <br />
                Decide faster.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-secondary)]">
                Two tools. One goal. Help serious players review hands better,
                spot patterns faster, and keep action cleaner.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                This site is here to sell the product line, recruit founding backers,
                and show exactly what is getting built.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 text-sm">
                <a
                  href="#products"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 font-medium text-[#0b0f0d] transition-transform hover:-translate-y-0.5"
                >
                  See the product line
                </a>
                <a
                  href="#funding"
                  className="rounded-full border border-[rgba(211,180,111,0.35)] bg-[rgba(211,180,111,0.08)] px-5 py-3 text-[var(--color-accent)] transition-colors hover:bg-[rgba(211,180,111,0.12)]"
                >
                  Become a founding backer
                </a>
              </div>
            </div>

            <div className="felt-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Why back it
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Before launch
                </p>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  "Backers help fund the first release window.",
                  "Backers get early access and better pricing.",
                  "If this starts making money, the poker toolset gets the focus.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 border-t border-[rgba(57,82,68,0.7)] pt-5 first:border-t-0 first:pt-0">
                    <span className="text-xs font-mono text-[var(--color-muted)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--color-secondary)]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(8,11,10,0.45)] p-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Build priorities
                </p>
                <div className="mt-4 space-y-4">
                  {[
                    ["Exploit Better", 82],
                    ["Action Keeper", 71],
                    ["Founding backers", 90],
                  ].map(([label, width]) => (
                    <div key={label as string}>
                      <div className="flex items-center justify-between text-sm text-[var(--color-secondary)]">
                        <span>{label as string}</span>
                        <span className="font-mono text-[var(--color-muted)]">{width}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[rgba(57,82,68,0.5)]">
                        <div className="metric-bar h-full rounded-full" style={{ width: `${width}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {signals.map((signal) => (
              <div key={signal.label} className="felt-panel rounded-[1.5rem] p-6">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {signal.label}
                </p>
                <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef]">
                  {signal.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-secondary)]">
                  {signal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Product line
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-5xl">
                Built for review, edge, and cleaner decisions.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              One tool helps you read patterns and exploit better. The other turns loose action agreements into cleaner signed records.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {productCards.map((card) => (
              <article key={card.name} className="felt-panel rounded-[2rem] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {card.status}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#f4f6ef]">
                      {card.name}
                    </h3>
                  </div>
                  <div className="chip-outline rounded-full px-3 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    1% Better poker
                  </div>
                </div>

                <p className="mt-5 text-base leading-7 text-[var(--color-secondary)]">
                  {card.hook}
                </p>

                <div className="mt-6 grid gap-3">
                  {card.notes.map((note) => (
                    <div key={note} className="rounded-2xl border border-[rgba(57,82,68,0.7)] bg-[rgba(255,255,255,0.02)] px-4 py-4 text-sm text-[var(--color-secondary)]">
                      {note}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 felt-panel rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Simple pitch
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f4f6ef]">
                  Poker tools worth paying for.
                </h3>
              </div>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-secondary)]">
                <p>
                  `Exploit Better` is about pattern analysis, fish-pattern detection,
                  and study signals that get more useful as your data grows.
                </p>
                <p>
                  `Action Keeper` is about turning spoken staking and action deals
                  into cleaner, signed, timestamped records with less friction.
                </p>
              </div>
            </div>
          </div>

          <div id="funding" className="mt-10 felt-panel rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Founding backers
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-4xl">
                  Back the first poker toolset.
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-secondary)]">
                  If you want these products to ship faster, back them early.
                </p>
              </div>

              <div>
                <div className="rounded-[1.6rem] border border-[rgba(211,180,111,0.24)] bg-[rgba(211,180,111,0.07)] p-6">
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Anchor offer
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef]">
                        Founding Backer Pass
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-secondary)]">
                        Early access. Better pricing. Front-row seat to the first releases.
                      </p>
                    </div>
                    <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--color-accent)]">
                      $79
                    </p>
                  </div>

                  <div className="mt-6 grid gap-2">
                    {backingBenefits.map((benefit) => (
                      <p key={benefit} className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        {benefit}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href="mailto:chris.yoon@outlook.com?subject=Founding%20Backer%20Pass%20for%20OnePercentBetter.poker&body=Name%3A%0AEmail%3A%0AI%20want%20to%20back%20the%20first%20poker%20toolset.%0A"
                      className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[#0b0f0d] transition-transform hover:-translate-y-0.5"
                    >
                      Become a founding backer
                    </a>
                    <Link
                      href="#products"
                      className="rounded-full border border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[#f4f6ef]"
                    >
                      See the tools
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-12 border-t border-[rgba(57,82,68,0.6)] pt-6 text-sm text-[var(--color-muted)]">
            Built by the same system behind 1% Better.
          </footer>
        </div>
      </section>
    </main>
  );
}
