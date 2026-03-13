const productCards = [
  {
    name: "1% Better - Exploit Better",
    status: "Analytics tool",
    hook: "Analyze your patterns, tag fish patterns, and get exploit signals GTO alone does not give you.",
    notes: [
      "Your leaks, tracked over time",
      "Fish-pattern detection and labeling",
      "More hands, more signal, 1% better adjustments",
    ],
  },
  {
    name: "1% Better - Action Keeper",
    status: "Workflow tool",
    hook: "Turn verbal swaps and staking deals into signed, timestamped records before the money gets weird.",
    notes: [
      "Docusign-style action flow",
      "Cleaner swaps, staking, and receipts",
      "Less confusion, less trust friction",
    ],
  },
];

const signals = [
  {
    label: "Pain",
    value: "Real",
    body: "Built from spots I actually lived through at the table.",
  },
  {
    label: "Products",
    value: "2",
    body: "One exploit tool. One staking workflow tool.",
  },
  {
    label: "Backers",
    value: "Open",
    body: "Funding is open before the first releases land.",
  },
];

const backingBenefits = [
  "Early access when the first tools ship",
  "Discounted founding pricing",
  "Priority updates as the tools tighten up",
];

const storyBlocks = [
  {
    label: "Part-time amateur pain point",
    title: "I was playing part-time and still running into expensive friction.",
    body:
      "I do not need more poker content. I need cleaner tools. Better exploit review. Cleaner action records. Less confusion around money spots.",
  },
  {
    label: "Why Action Keeper",
    title: "A 10% swap got messy the second real money showed up.",
    body:
      "I swapped 10% with a friend. I busted. He finished second. I thought I was owed 10% of the score. He said he fired two bullets, so I should only get 5%. Then came the usual talk: one-bullet only, profit-only, this pro says that. That was the moment I realized verbal action is too loose once there is real money on the line.",
  },
  {
    label: "Why Exploit Better",
    title: "GTO gives numbers. It does not give me my own pattern edge.",
    body:
      "I wanted something that tracks my own recurring leaks, tags fish patterns, and shows where my response is still off. The fish are not changing. I am. If the data gets deeper, the edge should get clearer.",
  },
];

const builderLinks = [
  {
    label: "Hendon Mob",
    href: "https://pokerdb.thehendonmob.com/player.php?a=r&n=558957",
  },
  {
    label: "Email Chris",
    href: "mailto:chris.yoon@outlook.com?subject=Founding%20Backer%20for%20OnePercentBetter.poker",
  },
];

const ctaMailto =
  "mailto:chris.yoon@outlook.com?subject=Founding%20Backer%20Pass%20for%20OnePercentBetter.poker&body=Name%3A%0AEmail%3A%0AI%20want%20to%20back%20the%20first%20poker%20toolset.%0A";

const highRollerMailto =
  "mailto:chris.yoon@outlook.com?subject=High%20Conviction%20Backer%20for%20OnePercentBetter.poker&body=Name%3A%0AEmail%3A%0AI%20want%20to%20back%20the%20poker%20toolset%20at%20a%20higher%20level.%0A";

const offerCards = [
  {
    label: "Founding Backer Pass",
    amount: "$79",
    body: "Early access, better pricing, and a direct reason to ship faster.",
    href: ctaMailto,
  },
  {
    label: "High-Conviction Backer",
    amount: "$299+",
    body: "For people who want to materially speed up the first release cycle.",
    href: highRollerMailto,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-[var(--color-foreground)]">
      <section className="table-grid relative overflow-hidden px-6 pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 border-b border-[rgba(57,82,68,0.6)] pb-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Poker analytics and staking workflow tools
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
                Two products built from real poker pain points:
                exploit review that gets sharper as data grows, and action records
                that stop swap and staking confusion before the money moves.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                This is a product page first. If this makes money, this gets the focus.
                If you want these tools to exist sooner, back them.
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
                <a
                  href="https://pokerdb.thehendonmob.com/player.php?a=r&n=558957"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-5 py-3 text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[#f4f6ef]"
                >
                  See live results
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
                  "Exploit Better is for pattern analysis and exploit growth.",
                  "Action Keeper is for swaps, staking, and signed action records.",
                  "If this gets backed, the poker toolset gets the time.",
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

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {storyBlocks.map((block) => (
              <article key={block.label} className="felt-panel rounded-[1.7rem] p-6">
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {block.label}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f4f6ef]">
                  {block.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-secondary)]">
                  {block.body}
                </p>
              </article>
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
                  `Exploit Better` is about your patterns, fish patterns, and exploit signals
                  that get better as the data set gets deeper.
                </p>
                <p>
                  `Action Keeper` is about turning spoken staking and swap deals into
                  cleaner, signed, timestamped records before interpretation starts changing after the fact.
                </p>
              </div>
            </div>
          </div>

          <div id="funding" className="mt-10 felt-panel rounded-[2rem] p-7 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Back the build
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-4xl">
                  If you want this to ship faster, back it now.
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--color-secondary)]">
                  I do not want to work on this for free forever. If players want
                  these tools, this is the cleanest signal.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {builderLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="rounded-full border border-[var(--color-border)] px-4 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[#f4f6ef]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {offerCards.map((offer) => (
                  <a
                    key={offer.label}
                    href={offer.href}
                    className="rounded-[1.6rem] border border-[rgba(211,180,111,0.24)] bg-[rgba(211,180,111,0.07)] p-6 transition-transform hover:-translate-y-0.5"
                  >
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {offer.label}
                    </p>
                    <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-accent)]">
                      {offer.amount}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[var(--color-secondary)]">
                      {offer.body}
                    </p>
                  </a>
                ))}
                <div className="rounded-[1.6rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] p-6 sm:col-span-2">
                  <div className="grid gap-2">
                    {backingBenefits.map((benefit) => (
                      <p key={benefit} className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-muted)]">
                        {benefit}
                      </p>
                    ))}
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
