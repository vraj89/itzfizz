import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onStartProject }) {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={rootRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-void/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-sm font-extrabold uppercase tracking-[0.35em] text-ice md:text-base"
        >
          Itz<span className="text-lime">fizz</span>
        </a>
        <ul className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.22em] text-fog sm:flex">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-ice"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onStartProject}
          className="rounded-full border border-lime/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-lime transition-colors duration-300 hover:bg-lime hover:text-void md:text-xs"
        >
          Start a project
        </button>
      </nav>
    </header>
  )
}
