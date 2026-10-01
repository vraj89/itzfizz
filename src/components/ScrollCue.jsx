export default function ScrollCue() {
  return (
    <div className="flex flex-col items-center gap-2.5" aria-hidden="true">
      <span className="text-[10px] font-medium tracking-[0.42em] text-fog uppercase">
        Scroll to explore
      </span>
      <svg
        className="cue-arrow h-3.5 w-3.5 text-lime"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 5.5 8 10.5 13 5.5" />
      </svg>
    </div>
  )
}
