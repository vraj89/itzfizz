export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-coal">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-12 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.3em] text-ice uppercase">
            Itz<span className="text-lime">fizz</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-fog">
            A scroll-driven concept experience crafted for the Itzfizz Digital
            internship assignment.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href="mailto:hello@itzfizz.example"
            className="text-sm font-medium text-ice transition-colors duration-300 hover:text-lime"
          >
            hello@itzfizz.example
          </a>
          <p className="text-[10px] tracking-[0.22em] text-smoke uppercase">
            © {new Date().getFullYear()} Itzfizz — Concept submission
          </p>
        </div>
      </div>
    </footer>
  )
}
