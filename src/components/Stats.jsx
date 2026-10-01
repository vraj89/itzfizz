const STATS = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '40+', label: 'Digital Projects' },
  { value: '3x', label: 'Faster Experiences' },
  { value: '24/7', label: 'Digital Presence' },
]

export default function Stats() {
  return (
    <section aria-label="Design statistics" data-stats>
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-2">
        {STATS.map((stat) => (
          <div key={stat.label} data-stat className="flex flex-col items-start">
            <span className="mb-2 block h-px w-10 bg-lime/60" />
            <p className="font-display text-4xl font-extrabold text-ice md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.14em] text-fog uppercase md:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[10px] tracking-[0.18em] text-smoke uppercase">
        Figures are illustrative design content, not company metrics
      </p>
    </section>
  )
}
