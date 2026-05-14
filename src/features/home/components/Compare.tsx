import { Reveal }          from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/types'
import { ReactNode }        from 'react'

interface CompareProps {
  dict: Dictionary['compare']
}

/* ── Icons ── */
const FEATURE_ICONS: ReactNode[] = [
  /* Pricing */
  <svg key="pricing" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0
             010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013
             12V7a4 4 0 014-4z" />
  </svg>,
  /* Candidate validation */
  <svg key="validation" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955
             11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824
             10.29 9 11.622 5.176-1.332 9-6.03 9-11.622
             0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  /* Risk on you */
  <svg key="risk" className="w-4 h-4" fill="none" viewBox="0 0 24 24"
       stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0
             00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
]

function CheckBadge() {
  return (
    <span className="w-6 h-6 rounded-full bg-mint/12 border border-mint/30
                     flex items-center justify-center flex-shrink-0">
      <svg className="w-3.5 h-3.5 text-mint" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}

function CrossBadge() {
  return (
    <span className="w-6 h-6 rounded-full bg-elevated border border-edge
                     flex items-center justify-center flex-shrink-0">
      <svg className="w-3 h-3 text-dim/50" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" strokeWidth="2.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  )
}

export function Compare({ dict }: CompareProps) {
  return (
    <section id="compare"
             className="relative py-28 border-b border-edge/60 overflow-hidden">

      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Mint ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.05) 0%, transparent 65%)' }} />

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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002
                         2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10
                         m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2
                         a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

        {/* ── Comparison card ── */}
        <Reveal delay={120}>
          <div className="rounded-[22px] overflow-hidden border border-edge/60
                          shadow-[0_8px_48px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)]">
            <div className="overflow-x-auto">
              <div className="min-w-[540px]">

                {/* Column headers */}
                <div className="grid grid-cols-[180px_1fr_1fr] lg:grid-cols-[220px_1fr_1fr]">

                  {/* Feature label col */}
                  <div className="bg-elevated/70 px-6 py-5
                                  border-b border-r border-edge/60" />

                  {/* "Us" header */}
                  <div className="relative bg-mint/[0.05] px-6 py-5
                                  border-b border-r border-mint/20">
                    {/* Mint top accent */}
                    <div className="absolute inset-x-0 top-0 h-[3px]
                                    bg-gradient-to-r from-mint-dark via-mint to-emerald-400" />
                    <div className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-mint animate-pulse flex-shrink-0" />
                      <span className="font-display font-bold text-mint text-[0.95rem]">
                        {dict.colUs}
                      </span>
                    </div>
                  </div>

                  {/* "Them" header */}
                  <div className="bg-elevated/70 px-6 py-5 border-b border-edge/60">
                    <span className="font-display font-semibold text-dim text-[0.95rem]">
                      {dict.colThem}
                    </span>
                  </div>
                </div>

                {/* Data rows */}
                {dict.rows.map((row, i) => {
                  const isLast = i === dict.rows.length - 1
                  return (
                    <div key={row.feature}
                         className={`grid grid-cols-[180px_1fr_1fr] lg:grid-cols-[220px_1fr_1fr]
                                     group transition-colors duration-150
                                     hover:bg-elevated/30
                                     ${!isLast ? 'border-b border-edge/50' : ''}`}>

                      {/* Feature label */}
                      <div className="bg-elevated/40 px-5 py-5 lg:px-6
                                      border-r border-edge/50
                                      flex items-center gap-3
                                      group-hover:bg-elevated/60 transition-colors duration-150">
                        <div className="w-8 h-8 rounded-[8px] bg-panel border border-edge
                                        flex items-center justify-center
                                        text-dim/60 flex-shrink-0">
                          {FEATURE_ICONS[i]}
                        </div>
                        <span className="font-semibold text-body/80 text-[0.87rem] leading-snug">
                          {row.feature}
                        </span>
                      </div>

                      {/* "Us" cell */}
                      <div className="bg-mint/[0.03] px-5 py-5 lg:px-6
                                      border-r border-mint/12
                                      flex items-center
                                      group-hover:bg-mint/[0.05] transition-colors duration-150">
                        <span className="flex items-start gap-2.5
                                         text-body font-medium text-[0.9rem] leading-snug">
                          <CheckBadge />
                          {row.us}
                        </span>
                      </div>

                      {/* "Them" cell */}
                      <div className="px-5 py-5 lg:px-6 flex items-center">
                        <span className="flex items-start gap-2.5
                                         text-dim text-[0.9rem] leading-snug">
                          <CrossBadge />
                          {row.them}
                        </span>
                      </div>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
