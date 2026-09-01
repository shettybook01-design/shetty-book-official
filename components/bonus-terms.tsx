const TERMS = [
  {
    label: 'Get New ID',
    value: '10% Bonus',
  },
  {
    label: 'Every Deposit',
    value: '3% Bonus',
  },
  {
    label: 'Referral Bonus',
    value: '5%',
  },
]

export function BonusTerms() {
  return (
    <section
      id="dealing-terms"
      className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20"
    >
      {/* Heading */}
      <div className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-primary">
          Special Offers
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl md:text-5xl">
          Bonus Terms
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Enjoy exclusive bonuses and rewards with our special dealing terms.
        </p>
      </div>

      {/* Terms Cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TERMS.map((term) => (
          <div
            key={term.label}
            className="animated-card group relative overflow-hidden rounded-xl bg-card p-[2px] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Animated Border */}
            <div className="animated-border absolute inset-[-100%]" />

            {/* Card Content */}
            <div className="relative z-10 flex min-h-[170px] flex-col items-center justify-center rounded-[10px] bg-card px-6 py-8 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground/70">
                {term.label}
              </span>

              <span className="mt-3 font-display text-3xl font-bold uppercase text-primary sm:text-4xl">
                {term.value}
              </span>

              <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Exclusive Offer
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Company Message */}
      <div className="animated-card relative mt-6 overflow-hidden rounded-xl bg-card p-[2px]">
        {/* Animated Border */}
        <div className="animated-border absolute inset-[-100%]" />

        <div className="relative z-10 rounded-[10px] bg-primary/5 px-6 py-7 text-center">
          <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-primary sm:text-xl">
            We are a Company, Not a Dealer
          </span>

          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Your trust and satisfaction are our priority. We provide a
            transparent and reliable platform for our customers.
          </p>
        </div>
      </div>
    </section>
  )
}