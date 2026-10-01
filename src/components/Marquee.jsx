import { useRef } from 'react'

const ITEMS = [
  'Scroll-Driven Experiences',
  'Motion Design',
  'Webflow Engineering',
  'Interactive Storytelling',
  'Creative Development',
]

export default function Marquee() {
  const trackRef = useRef(null)
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <section id="work" aria-label="Capabilities" className="relative overflow-hidden border-y border-white/5 bg-coal py-6 md:py-8">
      <div
        ref={trackRef}
        className="marquee-track flex w-max items-center gap-10 whitespace-nowrap md:gap-16"
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 md:gap-16">
            <span className="font-display text-lg font-bold tracking-[0.18em] text-ice/80 uppercase md:text-2xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-lime/70" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  )
}
