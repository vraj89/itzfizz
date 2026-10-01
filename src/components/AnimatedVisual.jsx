import { memo } from 'react'
import OrbitRing from './OrbitRing.jsx'

const AnimatedVisual = memo(function AnimatedVisual({ visualRef, orbRef, ringWrapRef }) {
  return (
    <div
      ref={visualRef}
      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      aria-hidden="true"
    >
      <div className="relative aspect-square w-[min(64vw,38vh,400px)] md:w-[min(32vw,46vh,460px)]">
        <div
          ref={orbRef}
          className="relative h-full w-full will-change-transform"
        >
          <div className="absolute -inset-[26%] rounded-full bg-lime/14 blur-[70px]" />
          <OrbitRing ringWrapRef={ringWrapRef} />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,#e9ff9c_0%,#cdfa4e_34%,#5f7a1a_66%,#1a2410_100%)] shadow-[0_0_90px_rgba(205,250,78,0.28)]" />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_75%,rgba(5,5,6,0.55),transparent_58%)]" />
          <div className="absolute top-[16%] left-[22%] h-[13%] w-[26%] rounded-full bg-white/50 blur-md" />
          <div className="absolute inset-x-0 -bottom-[6%] h-10 rounded-[50%] bg-black/70 blur-xl" />
        </div>
      </div>
    </div>
  )
})

export default AnimatedVisual
