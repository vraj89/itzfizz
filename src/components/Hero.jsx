import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AnimatedVisual from './AnimatedVisual.jsx'
import ScrollCue from './ScrollCue.jsx'
import Statement from './Statement.jsx'
import Stats from './Stats.jsx'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

const HEADLINE = [
  { text: 'Welcome', outline: false },
  { text: 'Itzfizz', outline: true },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const visualRef = useRef(null)
  const orbRef = useRef(null)
  const ringWrapRef = useRef(null)
  const eyebrowRef = useRef(null)
  const headlineRef = useRef(null)
  const statementRef = useRef(null)
  const statsRef = useRef(null)
  const cueRef = useRef(null)
  const backdropRef = useRef(null)

  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion) return undefined
    const ctx = gsap.context(() => {
      const letters = headlineRef.current?.querySelectorAll('[data-letter]') ?? []
      const stats = statsRef.current?.querySelectorAll('[data-stat]') ?? []

      gsap.set(visualRef.current, { autoAlpha: 0, scale: 0.85 })
      gsap.set(eyebrowRef.current, { autoAlpha: 0, y: 16 })
      gsap.set(statementRef.current, { autoAlpha: 0, y: 26 })
      gsap.set(cueRef.current, { autoAlpha: 0, y: 14 })
      gsap.set(letters, { autoAlpha: 0, y: 48 })
      gsap.set(stats, { autoAlpha: 0, y: 26 })

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(visualRef.current, { autoAlpha: 1, scale: 1, duration: 1.5 }, 0.1)
        .to(letters, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.04 }, 0.35)
        .to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.55)
        .to(statementRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.05)
        .to(stats, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, 1.2)
        .to(cueRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, 1.6)
    }, sectionRef)
    return () => ctx.revert()
  }, [reducedMotion])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) return

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(orbRef.current, { yPercent: -24, scale: 1.16, rotate: 18, duration: 1, ease: 'power1.inOut' }, 0)
        .to(ringWrapRef.current, { rotate: 28, scale: 1.14, duration: 1 }, 0)
        .to(headlineRef.current, { yPercent: -14, duration: 1 }, 0)
        .to(cueRef.current, { autoAlpha: 0, duration: 0.25 }, 0.2)
        .to(statementRef.current, { autoAlpha: 0, y: -26, duration: 0.45, ease: 'power2.in' }, 0.55)
        .to(statsRef.current, { autoAlpha: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 0.62)
        .to(backdropRef.current, { opacity: 0.5, duration: 1 }, 0)
        .to(orbRef.current, { xPercent: 20, yPercent: 8, scale: 0.82, rotate: 42, duration: 1, ease: 'power1.inOut' }, 1)
        .to(ringWrapRef.current, { rotate: -26, scale: 0.9, duration: 1 }, 1)
        .to(eyebrowRef.current, { autoAlpha: 0, y: -14, duration: 0.4 }, 1.05)
        .to(headlineRef.current, { yPercent: -38, autoAlpha: 0, duration: 0.55, ease: 'power2.in' }, 1.1)
        .to(backdropRef.current, { opacity: 0.2, duration: 1 }, 1)
    }, sectionRef)

    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-screen min-h-[640px] flex-col overflow-hidden"
    >
      <div ref={backdropRef} className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_44%,rgba(205,250,78,0.09),transparent_70%)]" />
        <div className="noise absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div ref={stageRef} className="pointer-events-none absolute inset-0 opacity-50 md:opacity-100">
        <AnimatedVisual visualRef={visualRef} orbRef={orbRef} ringWrapRef={ringWrapRef} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-10 md:px-10 md:pt-32">
        <p
          ref={eyebrowRef}
          className="mb-5 flex items-center gap-3 text-[10px] font-semibold tracking-[0.42em] text-fog uppercase md:mb-7 md:text-xs"
        >
          <span className="h-px w-10 bg-lime/70" />
          Digital Experience Studio
        </p>

        <h1
          ref={headlineRef}
          className="font-display font-extrabold uppercase leading-[0.95] text-ice"
        >
          {HEADLINE.map(({ text, outline }) => (
            <span
              key={text}
              className={`block text-[clamp(2.4rem,9vw,7.25rem)] tracking-[0.08em] ${
                outline ? 'text-stroke' : ''
              }`}
            >
              {text.split('').map((letter, i) => (
                <span key={`${letter}-${i}`} data-letter className="inline-block will-change-transform">
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div ref={statementRef} className="mt-8 max-w-md md:mt-10">
          <Statement />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 md:px-10">
        <div ref={statsRef}>
          <Stats />
        </div>
        <div ref={cueRef} className="mt-8 flex justify-center md:mt-10">
          <ScrollCue />
        </div>
      </div>
    </section>
  )
}
