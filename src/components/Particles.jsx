import { useMemo } from 'react'
import { memo } from 'react'

const PARTICLE_COUNT = 12

const Particles = memo(function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const seed = (i * 97 + 13) % 100
        return {
          id: i,
          left: `${(seed * 0.97 + 2) % 100}%`,
          top: `${((seed * 1.31 + 7) % 88) + 4}%`,
          size: (seed % 3) + 2,
          duration: 7 + (seed % 5),
          delay: -((seed % 7) + 1),
          opacity: 0.12 + ((seed % 4) * 0.07),
        }
      }),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          data-ambient
          className="absolute rounded-full bg-ice"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `cue-slide ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
})

export default Particles
