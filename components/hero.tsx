import Image from 'next/image'

const WHATSAPP_NUMBER1 = '+918297118390'
const WHATSAPP_NUMBER2 = '+917355286763'
const WHATSAPP_NUMBER3 = '+919630073405'

const getWhatsAppUrl = (message: string, whatsAppNumber: string) =>
  `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`

export function Hero() {
  const getNewIdMessage =
    'Hello! 👋 I want to get a new ID. Please provide me with the details.'

  const betNowMessage =
    'Hello! 👋 I want to place a bet. Please provide me with the available options and details.'

  const customerCareMessage =
    'Hello! 👋 I need customer support. Please help me with my query.'

  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 60% 40%, oklch(0.28 0.05 165) 0deg 6deg, transparent 6deg 12deg)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 35%, oklch(0.3 0.06 160 / 0.6), transparent 60%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div className="text-center md:text-left">
          <h1 className="text-balance font-display text-4xl font-bold leading-tight sm:text-5xl">
            <span className="text-primary">Shetty Online Book</span>{' '}
            <span className="text-foreground">
              Most Trusted Book And The Largest Online Sports ID Provider
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground md:mx-0">
            Get your instant ID, bet on every major sport, and enjoy live
            casino action with lightning-fast deposits and withdrawals.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {/* Get New ID */}
            <a
              href={getWhatsAppUrl(getNewIdMessage, WHATSAPP_NUMBER1)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Get New ID
            </a>

            {/* Bet Now */}
            <a
              href={getWhatsAppUrl(betNowMessage, WHATSAPP_NUMBER2)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-105"
            >
              Bet Now
            </a>

            {/* Customer Care */}
            <a
              href={getWhatsAppUrl(customerCareMessage, WHATSAPP_NUMBER3)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-primary/60 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
            >
              Customer Care Number
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <Image
            src="/images/heroImage.png"
            alt="Roulette wheel, playing cards, dice and poker chips"
            width={720}
            height={620}
            priority
            className="h-auto w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
