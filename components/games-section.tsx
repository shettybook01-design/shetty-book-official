'use client'

import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const GAMES = [
  { name: 'Cricket', img: '/images/cricket.jpg', whatsappNumber: '+918297118390' },
  { name: 'Football', img: '/images/football.jpg', whatsappNumber: '+917355286763' },
  { name: 'Tennis', img: '/images/tennis.jpg', whatsappNumber: '+919630073405' },
  { name: 'Cricket Casino', img: '/images/cricket-casino.jpg', whatsappNumber: '+917400722247' },
  { name: 'Teen Patti', img: '/images/teen-patti.jpg', whatsappNumber: '+917400722247' },
  { name: 'Roulette', img: '/images/roulette.jfif', whatsappNumber: '+917400722247' },
]

export function GamesSection() {
  const openWhatsApp = (gameName: string, whatsappNumber: string) => {
    const message = `Hi, I would like to generate ID and play.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section
      id="games-section"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6"
    >
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-foreground/25 sm:text-5xl">
          Nothing Beyond Winning
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          You can earn more 10X from Live Casino and advance bet started in
          Cricket, Football &amp; Tennis
        </p>

        <p className="mt-6 font-display text-lg font-semibold uppercase tracking-[0.3em] text-primary">
          Let&apos;s Start Playing
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {/* Aviator Card */}
        {/* Aviator Card */}
        <button
          type="button"
          onClick={() => openWhatsApp('Aviator', '+918297118390')}
          className="group relative h-[280px] w-full overflow-hidden rounded-xl border border-border/60 bg-card text-left shadow-lg sm:h-[260px] lg:h-[260px]"
        >
          <div className="absolute inset-0 h-full w-full overflow-hidden">
            <DotLottieReact
              src="/images/aviator.json"
              loop
              autoplay
              className="h-full w-full scale-[3.25]"
            />
          </div>

          {/* Dark gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
            <span className="font-display text-2xl font-bold uppercase italic tracking-wide text-foreground drop-shadow">
              Aviator
            </span>

            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              Play
            </span>
          </div>
        </button>

        {/* Game Cards */}
        {GAMES.map((game) => (
          <button
            key={game.name}
            type="button"
            onClick={() =>
              openWhatsApp(game.name, game.whatsappNumber)
            }
            className="group relative h-[280px] w-full overflow-hidden rounded-xl border border-border/60 bg-card text-left shadow-lg sm:h-[260px] lg:h-[260px]"
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={game.img}
                alt={`${game.name} betting`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
              <span className="font-display text-2xl font-bold uppercase italic tracking-wide text-foreground drop-shadow">
                {game.name}
              </span>

              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Play
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
