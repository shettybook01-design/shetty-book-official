import { Logo } from './logo'

import { FaInstagramSquare, FaTelegram, FaWhatsapp   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: `https://wa.me/+918297118390?text=${encodeURIComponent(
      'Hello! 👋 I want to get my ID. Please provide me with the details.'
    )}`,
    icon: <FaWhatsapp  />,
  },
  {
  name: 'Telegram',
  href: 'https://t.me/Shettybookofficial01?text=Hello%21%20I%20want%20to%20get%20my%20ID.%20Please%20help%20me.',
  icon: <FaTelegram />,
},
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shettybook.in/',
    icon: <FaInstagramSquare />,
  },
]

const GAMES = [
  'Casino',
  'Live casino',
  'Roulette',
  'Table games',
  'Card games',
  'Loto',
  'Andar bahar live',
  'Blackjack live',
  'Lightning dice live',
  'Crazy time live',
  'Dragon tiger live',
  'Teen patti live',
]

const PROMOS = [
  'Sports Cashback 10%',
  'Multiple Bonus +50%',
  'Loyalty levels',
  'Bonuses',
  'Loyalty Program',
]

  
export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Logo />
          <p className="mt-6 font-display text-sm font-semibold uppercase tracking-wide text-primary">
            Payment We Accept
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
            {['UPI', 'PayPal', 'VISA', 'Bank IMPS / NEFT', 'Paytm', 'G Pay'].map((m) => (
              <span
                key={m}
                className="rounded border border-border/60 bg-background px-2.5 py-1"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
            Games
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {GAMES.map((g) => (
              <li key={g}>
                <a href="#" className="transition-colors hover:text-primary">
                  {g}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
              Promotions
            </h3>
            <div className="flex gap-2">
              {
                SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground text-2xl transition-colors hover:text-primary"
                  >
                    {link.icon}
                  </a>
                ))
              }
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {PROMOS.map((p) => (
              <li key={p}>
                <a href="#" className="transition-colors hover:text-primary">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 py-5">
        <p className="text-center text-xs text-muted-foreground">
          All rights reserved &copy; {new Date().getFullYear()} Shetty Online Book
        </p>
      </div>
    </footer>
  )
}
