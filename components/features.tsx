import { Headphones, Zap, Gamepad2, Heart } from 'lucide-react'

const FEATURES = [
  { icon: Headphones, title: '24/7 Customer Service' },
  { icon: Zap, title: 'Instant Payments' },
  { icon: Gamepad2, title: '10000+ Live Games' },
  { icon: Heart, title: 'Love For Our Customers' },
]

export function Features() {
  return (
    <section id="#features" className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/60"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/40 bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-foreground">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}