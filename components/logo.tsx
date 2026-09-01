import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <div
      id="logo"
      className={`flex items-center ${className ?? ''}`}
    >
      <Image
        src="/images/logo.png"
        alt="Shetty Online Book"
        width={150}
        height={100}
        priority
      />
    </div>
  )
}