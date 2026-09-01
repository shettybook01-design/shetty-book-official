import Image from 'next/image'

export function SupportBanner() {
  return (
    <section id="support-banner" className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      <div className="mx-auto grid max-w-7xl items-end gap-6 px-4 md:grid-cols-2 md:px-6">
        <div className="relative flex justify-center md:justify-start">
          <Image
            src="/images/customeCareImage.png"
            alt="Customer support agent wearing a headset"
            width={520}
            height={720}
            className="h-auto w-64 object-contain sm:w-80"
          />
        </div>

        <div className="pb-12 text-center md:pb-16 md:text-left">
          <div className="inline-block rounded-md bg-accent px-8 py-4">
            <span className="font-display text-3xl font-bold uppercase tracking-wide text-accent-foreground sm:text-4xl">
              24x7 Support
            </span>
          </div>
          <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Non-stop support so you can play with freedom.
          </p>
        </div>
      </div>
    </section>
  )
}