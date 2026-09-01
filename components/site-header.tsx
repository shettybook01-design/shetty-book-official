'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './logo'

const NAV = [
  { name: 'Home', href: '#hero' },
  { name: 'Games', href: '#games-section' },
  { name: 'Live Casino', href: '#live-casino' },
  { name: 'Dealing', href: '#dealing-terms' },
  { name: 'Bonus', href: '#bonus' },
]

const WHATSAPP_NUMBER = '+918297118390'

const WHATSAPP_MESSAGE =
  'Hello! 👋 I want to get my ID. Please provide me with the registration details and help me get started.'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header id="header" className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Get Your ID */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105 sm:inline-block"
          >
            Get Your ID
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="pt-2">
              {/* Mobile Get Your ID */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-primary px-3 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground"
              >
                Get Your ID
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

