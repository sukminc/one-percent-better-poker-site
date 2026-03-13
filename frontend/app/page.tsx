import Link from "next/link";

const productCards = [
  {
    name: "1% Better - Exploit Better",
    status: "Concept build",
    hook: "Population leaks, showdown patterns, and spot-by-spot exploit review.",
    notes: [
      "Hand tagging and review workflow",
      "Exploit-oriented pattern breakdowns",
      "Sharper post-session feedback loops",
    ],
  },
  {
    name: "1% Better - Action Keeper",
    status: "Workflow build",
    hook: "Cleaner staking, negotiation, and agreement tracking for poker action.",
    notes: [
      "Offer and counter history",
      "Agreement state tracking",
      "Trust-heavy workflow clarity",
    ],
  },
];

const signals = [
  {
    label: "Review loop",
    value: "Fast",
    body: "Designed for quick study passes, not bloated reporting dashboards.",
  },
  {
    label: "Positioning",
    value: "Analytics",
    body: "Built for serious poker review and decision support, not general content.",
  },
  {
    label: "Shared DNA",
    value: "1% Better",
    body: "Same system, same maker, different skin and sharper domain language.",
  },
];

const foundingTiers = [
  {
    label: "Rail Supporter",
    amount: "$19",
    desc: "A low-friction way to back the poker toolset and get founder updates.",
    perks: ["Founder updates", "Early build notes", "Signal that the category matters"],
  },
  {
    label: "Founding Player",
    amount: "$79",
    desc: "The anchor offer. Early access, product influence, and discounted first-release access.",
    perks: ["Early access", "Feature voting", "Discounted first release"],
  },
  {
    label: "Founding Pro",
    amount: "$249",
    desc: "For serious players who want a direct lane into the first product decisions.",
    perks: ["Priority feedback lane", "Pilot access", "Direct founder input"],
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
                Same system. Different table.
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                OnePercentBetter.poker
              </h1>
            </div>
            <div className="chip-outline inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-accent)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Poker analytics and decision tools
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
                A poker-specific product line for players who want sharper review,
                better exploit insight, and more structured action workflows.
                This is not the general 1% Better portfolio. This is the poker desk.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                The design shares DNA with <span className="text-[var(--color-accent)]">1% Better.dev</span>,
                but the tone is different: darker, tighter, and more tool-like.
                Less paper. More felt, terminals, and post-session analysis.
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
                  Get founding access
                </a>
                <a
                  href="https://onepercentbetter.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-5 py-3 text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[#f4f6ef]"
                >
                  Visit 1% Better.dev
                </a>
              </div>
            </div>

            <div className="felt-panel rounded-[2rem] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Table notes
                </p>
                <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  Front door build
                </p>
              </div>

              <div className="mt-7 space-y-5">
                {[
                  "Exploit Better owns the analysis and review side.",
                  "Action Keeper owns the staking and agreement workflow side.",
                  "The site should read like a serious tool brand, not a personal side project.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 border-t border-[rgba(57,82,68,0.7)] pt-5 first:border-t-0 first:pt-0">
                    <span className="text-xs font-mono text-[var(--color-muted)]">0{index + 1}</span>
                    <p className="text-sm leading-6 text-[var(--color-secondary)]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.4rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(8,11,10,0.45)] p-5">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Surface priorities
                </p>
                <div className="mt-4 space-y-4">
                  {[
                    ["Positioning clarity", 88],
                    ["Product-family fit", 76],
                    ["Analytics-tool feel", 83],
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
              Two products anchor the first wave. One helps review and exploit better.
              The other keeps high-trust action workflows legible.
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
                  Why this exists
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f4f6ef]">
                  Serious poker products deserve a sharper surface.
                </h3>
              </div>
              <div className="space-y-4 text-sm leading-7 text-[var(--color-secondary)]">
                <p>
                  `onepercentbetter.dev` should stay broad, simple, and portfolio-facing.
                  `onepercentbetter.poker` can be more direct: exploit language, review
                  loops, decision support, and trust-heavy workflow tooling.
                </p>
                <p>
                  That split keeps the main brand clean while giving the poker side
                  permission to sound like a tool for players, not a generalist landing page.
                </p>
              </div>
            </div>
          </div>

          <div id="funding" className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="felt-panel rounded-[2rem] p-7 sm:p-8">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Founding access
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef] sm:text-4xl">
                Back the first poker toolset. Get in early. Shape what ships.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-secondary)]">
                The poker site should not ask for generic support. It should offer
                a real anchor: early access, product influence, and a cleaner lane
                into the first releases.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                If the tools help serious players review faster, spot exploits more
                clearly, or manage action with less friction, the right people should
                be able to raise their hand before launch.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {foundingTiers.map((tier) => (
                  <div key={tier.label} className="rounded-[1.5rem] border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] p-5">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {tier.label}
                    </p>
                    <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f4f6ef]">
                      {tier.amount}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[var(--color-secondary)]">
                      {tier.desc}
                    </p>
                    <div className="mt-5 space-y-2">
                      {tier.perks.map((perk) => (
                        <p key={perk} className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                          {perk}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#feedback"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[#0b0f0d] transition-transform hover:-translate-y-0.5"
                >
                  Tell me your biggest pain point
                </Link>
                <a
                  href="mailto:chris.yoon@outlook.com?subject=Founding%20Access%20for%20OnePercentBetter.poker&body=Name%3A%0AEmail%3A%0AGame%20type%3A%0ABiggest%20pain%20point%3A%0AWhich%20tool%20would%20you%20pay%20for%20first%3F%0ABudget%20or%20price%20range%3A%0A"
                  className="rounded-full border border-[var(--color-border)] px-5 py-3 text-sm text-[var(--color-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[#f4f6ef]"
                >
                  Email founding interest
                </a>
              </div>
            </div>

            <div id="feedback" className="felt-panel rounded-[2rem] p-7 sm:p-8">
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Feedback capture
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f4f6ef]">
                Tell me what you would actually pay for first.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-secondary)]">
                Keep it short. I care more about real pain and real demand than polished survey answers.
              </p>

              <form
                action="mailto:chris.yoon@outlook.com"
                method="post"
                encType="text/plain"
                className="mt-7 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Name
                    </span>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Email
                    </span>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Game type
                  </span>
                  <select
                    name="game_type"
                    className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors focus:border-[var(--color-accent)]"
                  >
                    <option className="bg-[#101613]">Cash</option>
                    <option className="bg-[#101613]">MTT</option>
                    <option className="bg-[#101613]">Study / Solver-heavy</option>
                    <option className="bg-[#101613]">Staking / Backing</option>
                    <option className="bg-[#101613]">Mixed</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Biggest pain point
                  </span>
                  <textarea
                    name="pain_point"
                    rows={4}
                    placeholder="What is the most annoying part of your current review or action workflow?"
                    className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      First tool you would pay for
                    </span>
                    <select
                      name="tool_interest"
                      className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors focus:border-[var(--color-accent)]"
                    >
                      <option className="bg-[#101613]">Exploit Better</option>
                      <option className="bg-[#101613]">Action Keeper</option>
                      <option className="bg-[#101613]">Both</option>
                      <option className="bg-[#101613]">Not sure yet</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Price comfort
                    </span>
                    <input
                      name="price_range"
                      type="text"
                      placeholder="$19 / $79 / monthly / one-time"
                      className="w-full rounded-2xl border border-[rgba(57,82,68,0.8)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm text-[#f4f6ef] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                    />
                  </label>
                </div>

                <div className="rounded-[1.4rem] border border-[rgba(211,180,111,0.2)] bg-[rgba(211,180,111,0.06)] px-4 py-4 text-sm leading-6 text-[var(--color-secondary)]">
                  Fastest zero-backend version: this form opens your email client with the details.
                  For real collection, I recommend either <span className="text-[var(--color-accent)]">Tally/Formspree</span>
                  for speed or <span className="text-[var(--color-accent)]">Supabase + Resend</span> if you want owned data.
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[#0b0f0d] transition-transform hover:-translate-y-0.5"
                >
                  Send founding feedback
                </button>
              </form>
            </div>
          </div>

          <footer className="mt-12 border-t border-[rgba(57,82,68,0.6)] pt-6 text-sm text-[var(--color-muted)]">
            Built inside the same 1% Better system. Different audience. Different table.
          </footer>
        </div>
      </section>
    </main>
  );
}
