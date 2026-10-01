import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'

const PROJECT_TYPES = [
  'Branding & Identity',
  'Web Design & Development',
  'Motion & Scroll Experiences',
  'E-commerce',
  'Mobile App',
  'Other',
]

const BUDGETS = ['Under $1,000', '$1,000 – $5,000', '$5,000 – $10,000', '$10,000+', 'Not sure yet']

const TIMELINES = ['As soon as possible', '2 – 4 weeks', '1 – 3 months', 'Flexible']

const INITIAL_FORM = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  requirements: '',
  budget: '',
  timeline: '',
  message: '',
}

const FIELD_CLS =
  'w-full rounded-lg border border-white/10 bg-void/70 px-3.5 py-2.5 text-sm text-ice placeholder:text-smoke outline-none transition-colors duration-200 focus:border-lime/60'

const SELECT_CLS = `${FIELD_CLS} select-field appearance-none`

function Field({ label, className = '', children }) {
  return (
    <label data-field className={`block ${className}`}>
      <span className="mb-2 block text-[10px] font-semibold tracking-[0.22em] text-fog uppercase">
        {label}
      </span>
      {children}
    </label>
  )
}

export default function ProjectFormModal({ open, onClose }) {
  const [shouldRender, setShouldRender] = useState(false)
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')
  const rootRef = useRef(null)
  const backdropRef = useRef(null)
  const panelRef = useRef(null)
  const successRef = useRef(null)
  const closeRef = useRef(null)
  const closingRef = useRef(false)

  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      closingRef.current = false
    }
  }, [open])

  const close = () => {
    if (closingRef.current || !shouldRender) return
    closingRef.current = true

    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      if (status === 'submitted') {
        setForm(INITIAL_FORM)
        setStatus('idle')
      }
      setShouldRender(false)
      onClose()
    }

    if (reducedMotion) {
      finish()
      return
    }

    gsap
      .timeline({ onComplete: finish })
      .to(panelRef.current, { autoAlpha: 0, y: 22, scale: 0.97, duration: 0.3, ease: 'power2.in' }, 0)
      .to(backdropRef.current, { autoAlpha: 0, duration: 0.28, ease: 'power2.in' }, 0.06)

    window.setTimeout(finish, 700)
  }

  closeRef.current = close

  useLayoutEffect(() => {
    if (!shouldRender) return undefined
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set([backdropRef.current, panelRef.current], { autoAlpha: 1 })
        return
      }
      const fields = panelRef.current?.querySelectorAll('[data-field]') ?? []
      gsap.set(backdropRef.current, { autoAlpha: 0 })
      gsap.set(panelRef.current, { autoAlpha: 0, y: 28, scale: 0.97 })
      gsap.set(fields, { autoAlpha: 0, y: 14 })
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(backdropRef.current, { autoAlpha: 1, duration: 0.3 }, 0)
        .to(panelRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, 0.05)
        .to(fields, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.045 }, 0.2)
      const firstInput = panelRef.current?.querySelector('input, select, textarea')
      window.setTimeout(() => firstInput?.focus(), 380)
    }, rootRef)

    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeRef.current?.()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      ctx.revert()
    }
  }, [shouldRender, reducedMotion])

  useLayoutEffect(() => {
    if (status !== 'submitted' || !successRef.current) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo(
        successRef.current,
        { autoAlpha: 0, y: 18, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [status])

  if (!shouldRender) return null

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status !== 'idle') return
    setStatus('submitting')
    window.setTimeout(() => setStatus('submitted'), 900)
  }

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-form-title"
      className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6"
    >
      <div
        ref={backdropRef}
        onClick={() => closeRef.current?.()}
        className="absolute inset-0 bg-void/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-2xl border border-white/8 bg-coal shadow-[0_30px_80px_rgba(0,0,0,0.6)] sm:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/5 bg-coal/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-fog uppercase">
              <span className="h-px w-6 bg-lime/70" />
              Start a project
            </p>
            <h2 id="project-form-title" className="mt-1.5 font-display text-xl font-bold text-ice uppercase">
              Client project details
            </h2>
          </div>
          <button
            type="button"
            onClick={() => closeRef.current?.()}
            aria-label="Close form"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 text-fog transition-colors duration-200 hover:border-lime/50 hover:text-lime"
          >
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {status === 'submitted' ? (
          <div ref={successRef} className="flex flex-col items-center px-6 py-14 text-center">
            <span className="grid size-14 place-items-center rounded-full border border-lime/40 bg-lime/10 text-lime">
              <svg viewBox="0 0 20 20" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10.5l4 4 8-9" />
              </svg>
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-ice uppercase">Brief received</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
              Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — your project details are in.
              We will reach out at <span className="text-ice">{form.email || 'your email'}</span>{' '}
              within 24 hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setForm(INITIAL_FORM)
                  setStatus('idle')
                }}
                className="rounded-full border border-white/15 px-6 py-3 text-xs font-semibold tracking-[0.18em] text-fog uppercase transition-colors duration-200 hover:border-lime/50 hover:text-lime"
              >
                Send another brief
              </button>
              <button
                type="button"
                onClick={() => closeRef.current?.()}
                className="rounded-full bg-lime px-6 py-3 text-xs font-semibold tracking-[0.18em] text-void uppercase transition-transform duration-200 hover:scale-[1.03]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name *">
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={FIELD_CLS}
                />
              </Field>
              <Field label="Email address *">
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className={FIELD_CLS}
                />
              </Field>
              <Field label="Company / business name">
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company or brand"
                  value={form.company}
                  onChange={handleChange}
                  className={FIELD_CLS}
                />
              </Field>
              <Field label="Phone number">
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange}
                  className={FIELD_CLS}
                />
              </Field>
              <Field label="Project type *">
                <select
                  required
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={SELECT_CLS}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Estimated budget">
                <select name="budget" value={form.budget} onChange={handleChange} className={SELECT_CLS}>
                  <option value="" disabled>
                    Select a budget range
                  </option>
                  {BUDGETS.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Expected timeline" className="sm:col-span-2">
                <select name="timeline" value={form.timeline} onChange={handleChange} className={SELECT_CLS}>
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  {TIMELINES.map((timeline) => (
                    <option key={timeline} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Project requirements / description *" className="sm:col-span-2">
                <textarea
                  required
                  name="requirements"
                  rows={3}
                  placeholder="What are you building, and what does success look like?"
                  value={form.requirements}
                  onChange={handleChange}
                  className={`${FIELD_CLS} resize-none`}
                />
              </Field>
              <Field label="Additional message" className="sm:col-span-2">
                <textarea
                  name="message"
                  rows={2}
                  placeholder="Anything else we should know? (optional)"
                  value={form.message}
                  onChange={handleChange}
                  className={`${FIELD_CLS} resize-none`}
                />
              </Field>
            </div>

            <div data-field className="mt-7 flex flex-col gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] tracking-[0.14em] text-smoke uppercase">
                Average reply time — under 24 hours
              </p>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3 text-xs font-semibold tracking-[0.18em] text-void uppercase transition-all duration-200 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit project'}
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8h11M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
