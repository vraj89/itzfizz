const PILLARS = [
  {
    title: 'Motion with intent',
    body: 'Every animation earns its place. Scroll becomes a storytelling device, not a gimmick.',
  },
  {
    title: 'Performance first',
    body: 'Transforms and opacity, GPU-friendly timelines, zero layout thrash. Smoothness is a feature.',
  },
  {
    title: 'Built to respond',
    body: 'One composition that holds its poise from ultra-wide desktops down to the smallest phone.',
  },
]

export default function About() {
  return (
    <section id="studio" className="relative mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.42em] text-fog uppercase md:text-xs">
            <span className="h-px w-10 bg-lime/70" />
            About the experience
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ice uppercase md:text-5xl">
            Scroll is the <span className="text-stroke">story</span>
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-fog md:text-lg">
            This page is a concept study for Itzfizz Digital: a hero where the
            orb, the type and the grid all answer to one input — your scroll.
            GSAP ScrollTrigger maps scroll position directly to animation
            progress, so the scene plays forward and reverses naturally, frame
            by frame.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-3">
            {PILLARS.map((pillar) => (
              <article key={pillar.title} className="bg-coal p-6 md:p-7">
                <span className="mb-4 block h-px w-8 bg-lime/60" />
                <h3 className="font-display text-sm font-bold tracking-[0.08em] text-ice uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
