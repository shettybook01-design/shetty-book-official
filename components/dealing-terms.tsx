const TERMS = [
  { label: 'Min Deposit', value: '₹300' },
  { label: 'Min Withdrawal', value: '₹300' },
  { label: 'Withdrawal Timing', value: '10-15 minutes' },
  { label: 'Availability', value: '24x7 hours' },
]

export function DealingTerms() {
  return (
    <section id="dealing-terms" className="mx-auto max-w-5xl px-4 pb-16 md:px-6">
      <h2 className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
        Dealing Terms
      </h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TERMS.map((term) => (
          <div
            key={term.label}
            className="flex items-center justify-between rounded-lg border border-border/60 bg-card px-6 py-5"
          >
            <span className="font-semibold text-foreground">{term.label}</span>
            <span className="font-display text-lg font-semibold text-primary">
              {term.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}