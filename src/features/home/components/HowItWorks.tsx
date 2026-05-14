import { Reveal }          from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/types'
import { ReactNode }        from 'react'

interface HowItWorksProps {
  dict: Dictionary['howItWorks']
}

/* One icon per step — purely decorative, not translatable */
const STEP_ICONS: ReactNode[] = [
  /* 0 — Intake & scorecard */
  <svg key="0" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
             M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2
             m-6 9l2 2 4-4" />
  </svg>,

  /* 1 — AI-powered sourcing */
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,

  /* 2 — AI video validation */
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14
             M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>,

  /* 3 — Validated shortlist */
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0
             014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138
             3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0
             00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0
             00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0
             00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0
             00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0
             00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,

  /* 4 — Hand-off & 5% on hire */
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2
             m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1
             m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
]

export function HowItWorks({ dict }: HowItWorksProps) {
  const last = dict.steps.length - 1

  return (
    <section id="how"
             className="relative py-28 border-b border-edge/60 bg-elevated overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Mint ambient orb */}
      <div className="absolute -top-56 -left-40 w-[700px] h-[700px] rounded-full
                      pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full
                      pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-16 max-w-[640px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                            bg-mint/8 border border-mint/25
                            shadow-[0_2px_12px_rgba(108,92,231,0.08)]">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse flex-shrink-0" />
              <span className="text-mint text-[0.8rem] font-semibold tracking-wide">
                {dict.eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.08]
                           text-[clamp(2.2rem,4.5vw,3.4rem)] text-body mb-5">
              {dict.title}
            </h2>
            <p className="text-dim text-[1.03rem] leading-[1.82]">
              {dict.lead}
            </p>
          </div>
        </Reveal>

        {/* ── Vertical timeline ── */}
        <div className="relative mt-4">

          {/* Connecting line — desktop only */}
          <div className="absolute hidden lg:block top-7 left-7 w-[2px]"
               style={{
                 bottom:     '28px',
                 background: 'linear-gradient(to bottom, rgba(108,92,231,0.40) 0%, rgba(108,92,231,0.14) 75%, transparent 100%)',
               }} />

          <div className="space-y-4">
            {dict.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="flex gap-6 lg:gap-10 group items-start">

                  {/* ── Node ── */}
                  <div className="hidden lg:block flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full relative z-10 flex items-center justify-center
                                  transition-all duration-300
                                  ${i === last
                                    ? 'bg-gradient-to-br from-mint to-mint-dark border-2 border-mint/30 shadow-[0_0_0_4px_#F6F8FA,0_4px_16px_rgba(108,92,231,0.28)]'
                                    : 'bg-elevated border-2 border-edge shadow-[0_0_0_4px_#F6F8FA] group-hover:border-mint/50 group-hover:bg-white group-hover:shadow-[0_0_0_4px_#F6F8FA,0_4px_16px_rgba(108,92,231,0.10)]'
                                  }`}>
                      <span
                        className={`font-display font-bold text-[0.78rem] leading-none
                                    ${i === last ? 'text-white' : 'text-mint/70 group-hover:text-mint transition-colors duration-200'}`}>
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* ── Card ── */}
                  <div className="flex-1 bg-panel border border-edge rounded-[18px] p-7
                                  overflow-hidden transition-all duration-300
                                  hover:border-mint/25 hover:-translate-y-0.5
                                  hover:shadow-[0_16px_48px_rgba(108,92,231,0.08),0_2px_8px_rgba(0,0,0,0.04)]
                                  relative group/card">

                    {/* Hover fill */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mint/[0.025] to-transparent
                                    opacity-0 group-hover/card:opacity-100
                                    transition-opacity duration-500 pointer-events-none" />

                    {/* Top accent bar */}
                    <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-[18px]
                                    bg-gradient-to-r from-transparent via-mint/35 to-transparent
                                    opacity-0 group-hover/card:opacity-100
                                    transition-opacity duration-300 pointer-events-none" />

                    {/* Card header */}
                    <div className="relative z-10 flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">

                        {/* Mobile step number */}
                        <span className="lg:hidden inline-flex items-center justify-center
                                         w-8 h-8 rounded-full bg-mint/10 border border-mint/25
                                         font-display font-bold text-[0.72rem] text-mint flex-shrink-0">
                          0{i + 1}
                        </span>

                        {/* Icon badge */}
                        <div className="w-9 h-9 rounded-[9px] bg-mint/8 border border-mint/20
                                        flex items-center justify-center text-mint flex-shrink-0
                                        group-hover/card:bg-mint/12 group-hover/card:border-mint/30
                                        transition-colors duration-200">
                          {STEP_ICONS[i]}
                        </div>

                        <h3 className="font-display font-semibold text-[1.05rem] text-body leading-snug">
                          {step.title}
                        </h3>
                      </div>

                      {/* Time badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                                       bg-mint/8 border border-mint/20 flex-shrink-0
                                       text-mint text-[0.73rem] font-bold tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint flex-shrink-0" />
                        {step.time}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="relative z-10 h-px mb-4
                                    bg-gradient-to-r from-edge via-edge/60 to-transparent" />

                    {/* Description */}
                    <p className="relative z-10 text-dim text-[0.9rem] leading-[1.78]">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
