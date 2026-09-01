'use client'

import Image from 'next/image'

const WHATSAPP_NUMBER = '+918297118390'

const LIVE_GAMES = [
  { name: 'Teenpatti', img: '/images/live-teenpatti.jpg', whatsappNumber: '+918297118390' },
  { name: 'T20 Teen Patti', img: '/images/live-t20-teenpatti.jpg', whatsappNumber: '+917355286763' },
  { name: 'Hi Low', img: '/images/live-hilow.jpg', whatsappNumber: '+919630073405' },
  { name: 'Amar Akbar Anthony', img: '/images/live-aaa.jpg', whatsappNumber: '+918297118390' },
  { name: 'Andar Bahar', img: '/images/live-andarbahar.jpg', whatsappNumber: '+917355286763' },
  { name: 'Roulette', img: '/images/live-roulette.jpg', whatsappNumber: '+919630073405' },
]

export function LiveCasino() {
  const openWhatsApp = (gameName: string, whatsappNumber: string) => {
    const message = `Hi, I am interested in playing ${gameName}. Please provide me with more details.`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="live-casino" className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {LIVE_GAMES.map((game) => (
          <button
            key={game.name}
            type="button"
            onClick={() => openWhatsApp(game.name, game.whatsappNumber)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-primary/40 shadow-md"
          >
            <Image
              src={game.img}
              alt={`${game.name} live dealer`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />

            <span className="absolute bottom-2 left-2 right-2 font-display text-sm font-bold uppercase italic tracking-wide text-primary drop-shadow">
              {game.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

