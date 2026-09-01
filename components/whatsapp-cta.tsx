import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '+917355286763'

export function WhatsappCta() {
  const message =
    'Hello! 👋 I want to create an account. Please provide me with the details.'

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`

  return (
    <section id="whatsapp-cta" className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-r from-card to-secondary p-8 md:p-12">
        <div className="max-w-xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Get Your ID On
          </p>

          <h2 className="mt-2 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            WhatsApp Number
          </h2>

          <p className="mt-3 text-muted-foreground">
            Chat with us now to create your account in under a minute.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  )
}

