import type { ReactNode }  from 'react'
import { Reveal }          from '@/components/ui/Reveal'
import { CountUp }         from '@/components/ui/CountUp'
import type { Dictionary } from '@/i18n/types'

const ICONS: Record<string, ReactNode> = {
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
  ),
  cost: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"
         stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  ),
}

interface ProblemProps {
  dict: Dictionary['problem']
}

export function Problem({ dict }: ProblemProps) {
  return (
    <section className="relative py-28 border-b border-edge/60 overflow-hidden"
             style={{ background: '#FFFCF7' }}>

      {/* Subtle warm grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.32] pointer-events-none" />

      {/* Ambient amber orbs */}
      <div className="absolute -top-48 -right-32 w-[680px] h-[680px] rounded-full
                      pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full
                      pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-16 max-w-[660px]">

            {/* Amber eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                            bg-amber/8 border border-amber/25
                            shadow-[0_2px_12px_rgba(217,119,6,0.08)]">
              <svg className="w-3.5 h-3.5 text-amber flex-shrink-0" fill="currentColor"
                   viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd" />
              </svg>
              <span className="text-amber text-[0.8rem] font-semibold tracking-wide">
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

        {/* ── Pain-point cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dict.items.map((item, i) => (
            <Reveal key={item.stat} delay={i * 120}>
              <div className="group relative bg-white border border-edge rounded-[22px] p-9
                              overflow-hidden h-full transition-all duration-300
                              hover:-translate-y-2 hover:border-amber/30
                              hover:shadow-[0_24px_64px_rgba(217,119,6,0.10),0_4px_16px_rgba(0,0,0,0.04)]">

                {/* Hover gradient fill */}
                <div className="absolute inset-0
                                bg-gradient-to-br from-amber/[0.04] via-transparent to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500 pointer-events-none" />

                {/* Amber top accent bar — reveals on hover */}
                <div className="absolute inset-x-0 top-0 h-[2.5px] rounded-t-[22px]
                                bg-gradient-to-r from-transparent via-amber/50 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 pointer-events-none" />

                {/* Large faded corner index */}
                <div className="absolute -top-1 right-7 font-display font-bold
                                text-[7rem] leading-none select-none pointer-events-none
                                text-body/[0.04] group-hover:text-amber/[0.08]
                                transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon + stat row */}
                <div className="relative z-10 flex items-center gap-5 mb-7">
                  <div className="w-12 h-12 rounded-[13px] flex-shrink-0
                                  bg-amber/10 border border-amber/25 text-amber
                                  flex items-center justify-center
                                  group-hover:bg-amber/16 group-hover:border-amber/40
                                  transition-colors duration-300">
                    {ICONS[item.icon] ?? item.icon}
                  </div>

                  <div className="font-display font-bold leading-none
                                  text-[clamp(3rem,5.5vw,4.2rem)] text-amber">
                    <CountUp value={item.stat} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-display font-semibold text-[1.1rem]
                               text-body leading-snug mb-4">
                  {item.title}
                </h3>

                {/* Amber divider */}
                <div className="relative z-10 h-px mb-5
                                bg-gradient-to-r from-amber/30 via-amber/12 to-transparent" />

                {/* Description */}
                <p className="relative z-10 text-dim text-[0.9rem] leading-[1.78]">
                  {item.desc}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
