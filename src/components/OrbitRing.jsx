function Ring({ diameter, opacity, reverse = false, spinSeconds, extra = 'border-white/10' }) {
  return (
    <span
      data-ambient
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${extra}`}
      style={{
        width: diameter,
        height: diameter,
        opacity,
        animation: `spin-slow ${spinSeconds}s linear infinite${reverse ? ' reverse' : ''}`,
      }}
    />
  )
}

export default function OrbitRing({ ringWrapRef }) {
  return (
    <div
      ref={ringWrapRef}
      className="pointer-events-none absolute -inset-[30%] will-change-transform"
      aria-hidden="true"
    >
      <Ring diameter="74%" opacity={0.5} spinSeconds={38} extra="border-white/12" />
      <Ring diameter="100%" opacity={0.3} reverse spinSeconds={52} extra="border-dashed border-lime/25" />
      <Ring diameter="130%" opacity={0.14} spinSeconds={70} extra="border-white/8" />
    </div>
  )
}
