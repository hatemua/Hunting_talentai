import { Reveal }          from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/types'

interface SocialProofProps {
  dict: Dictionary['socialProof']
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-amber fill-amber" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
               00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0
               00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54
               1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
               1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1
               1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function SocialProof({ dict }: SocialProofProps) {
  return (
    <section id="proof"
             className="relative py-28 border-b border-edge/60 bg-elevated overflow-hidden">

      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14 max-w-[640px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                            bg-mint/8 border border-mint/25
                            shadow-[0_2px_12px_rgba(108,92,231,0.08)]">
              <svg className="w-3.5 h-3.5 text-mint flex-shrink-0" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955
                         11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824
                         10.29 9 11.622 5.176-1.332 9-6.03 9-11.622
                         0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-mint text-[0.8rem] font-semibold tracking-wide">
                {dict.eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.08]
                           text-[clamp(2.2rem,4.5vw,3.4rem)] text-body">
              {dict.title}
            </h2>
          </div>
        </Reveal>

        {/* ── Logo strip ── */}
        <Reveal delay={100}>
          <div className="relative rounded-[18px] border border-edge/70
                          bg-panel/60 backdrop-blur-sm overflow-hidden px-8 py-7">

            {/* Thin mint accent line at top */}
            <div className="absolute inset-x-0 top-0 h-[2px]
                            bg-gradient-to-r from-transparent via-mint/25 to-transparent" />

            {/* Edge fades */}
            <div className="absolute left-0 inset-y-0 w-12
                            bg-gradient-to-r from-panel/60 to-transparent
                            pointer-events-none z-10" />
            <div className="absolute right-0 inset-y-0 w-12
                            bg-gradient-to-l from-panel/60 to-transparent
                            pointer-events-none z-10" />

            <div className="flex flex-wrap gap-3 justify-center items-center">
              {dict.logos.map((name) => (
                <span key={name}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-[10px]
                                 bg-white border border-edge cursor-default
                                 shadow-[0_1px_3px_rgba(0,0,0,0.05)]
                                 hover:border-mint/30
                                 hover:shadow-[0_4px_14px_rgba(108,92,231,0.08)]
                                 transition-all duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint/60 flex-shrink-0" />
                  <span className="font-display font-semibold text-[0.87rem]
                                   text-dim/70 hover:text-dim/95
                                   transition-colors duration-200 tracking-tight">
                    {name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Testimonial card ── */}
        <Reveal delay={220}>
          <div className="mt-5 relative bg-panel border border-edge rounded-[22px]
                          overflow-hidden transition-all duration-300 group
                          hover:-translate-y-1.5 hover:border-mint/25
                          hover:shadow-[0_28px_72px_rgba(108,92,231,0.09),0_4px_16px_rgba(0,0,0,0.05)]">

            {/* Hover gradient fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-mint/[0.03] to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-500 pointer-events-none" />

            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-[2.5px]
                            bg-gradient-to-r from-transparent via-mint/40 to-transparent
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 pointer-events-none" />

            {/* Giant decorative quote mark */}
            <span className="absolute -top-6 left-8 font-display font-bold text-[10rem]
                             leading-none text-mint/[0.07] select-none pointer-events-none">
              &ldquo;
            </span>

            <div className="relative z-10 grid lg:grid-cols-[1fr_220px] gap-0">

              {/* ── Left: quote + author ── */}
              <div className="p-10 lg:pr-8">

                {/* Stars */}
                <div className="flex gap-1 mb-7">
                  {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                </div>

                {/* Quote */}
                <blockquote className="text-[1.2rem] leading-[1.78] text-body/90 mb-8
                                        max-w-[720px] font-[450]">
                  {dict.testimonial.text}
                </blockquote>

                {/* Author row */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0
                                  bg-gradient-to-br from-mint to-mint-dark
                                  flex items-center justify-center
                                  text-white font-bold text-[0.95rem]
                                  shadow-[0_4px_16px_rgba(108,92,231,0.30)]">
                    {dict.testimonial.authorInitials}
                  </div>
                  <div className="flex-1">
                    <strong className="text-body text-[0.92rem] font-semibold block leading-snug">
                      {dict.testimonial.authorName}
                    </strong>
                    <span className="text-dim text-[0.81rem]">
                      {dict.testimonial.authorRole}
                    </span>
                  </div>

                  {/* Verified badge */}
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full
                                  bg-mint/8 border border-mint/25 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-mint" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-mint text-[0.73rem] font-bold tracking-wide">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Right: metrics panel ── */}
              <div className="hidden lg:flex flex-col border-l border-edge/60">

                {/* Metric 1 — time to hire */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 gap-2
                                border-b border-edge/60">
                  <div className="w-10 h-10 rounded-[10px] bg-mint/10 border border-mint/25
                                  flex items-center justify-center mb-1">
                    <svg className="w-5 h-5 text-mint" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-display font-bold text-[1.9rem] text-mint leading-none">
                    8 days
                  </div>
                  <div className="text-dim text-[0.73rem] text-center leading-snug">
                    down from<br />6 weeks
                  </div>
                </div>

                {/* Metric 2 — rating */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 gap-2">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber fill-amber" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                                 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0
                                 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54
                                 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1
                                 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1
                                 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="font-display font-bold text-[1.9rem] text-body leading-none">
                    5.0
                  </div>
                  <div className="text-dim text-[0.73rem] text-center leading-snug">
                    client rating
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
