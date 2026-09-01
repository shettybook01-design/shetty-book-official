import { MessageCircle } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GamesSection } from '@/components/games-section'
import { LiveCasino } from '@/components/live-casino'
import { DealingTerms } from '@/components/dealing-terms'
import { BonusTerms } from '@/components/bonus-terms'
import { Payments } from '@/components/payments'
import { WhatsappCta } from '@/components/whatsapp-cta'
import { Features } from '@/components/features'
import { SupportBanner } from '@/components/support-banner'
import { SiteFooter } from '@/components/site-footer'
import { FaWhatsapp } from "react-icons/fa";


export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <GamesSection />
        <LiveCasino />
        <BonusTerms />
        <DealingTerms />
        <Payments />
        <WhatsappCta />
        <Features />
        <SupportBanner />
      </main>
      <SiteFooter />

      <a
        href={`https://wa.me/+918297118390?text=${encodeURIComponent(
          'Hello! 👋 I would like to get my ID. Please help me with the registration.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-accent/30 transition-transform hover:scale-110"
      >
        <FaWhatsapp className="h-7 w-7" />
      </a>
    </div>
  )
}
