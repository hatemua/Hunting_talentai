'use client'

import { useState }        from 'react'
import { Reveal }          from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/types'

interface FAQProps {
  dict: Dictionary['faq']
}

interface FAQRowProps {
  question:     string
  answer:       string
  index:        number
  total:        number
  defaultOpen?: boolean
}

function FAQRow({ question, answer, index, total, defaultOpen = false }: FAQRowProps) {
  const [open, setOpen] = useState(defaultOpen)
  const isLast = index === total - 1

  return (
    <div className={`relative transition-colors duration-200
                     ${open ? 'bg-mint/[0.025]' : 'hover:bg-elevated/60'}
                     ${!isLast ? 'border-b border-edge/60' : ''}`}>

      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full
                       transition-all duration-300
                       ${open
                         ? 'bg-gradient-to-b from-mint via-mint/70 to-mint/20'
                         : 'bg-transparent'}`} />

      {/* Question row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-5
                   py-6 px-7 text-left cursor-pointer">

        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Number badge */}
          <span className={`w-7 h-7 rounded-full flex items-center justify-center
                            flex-shrink-0 text-[0.67rem] font-bold tabular-nums
                            transition-all duration-250
                            ${open
                              ? 'bg-mint text-white shadow-[0_2px_10px_rgba(108,92,231,0.35)]'
                              : 'bg-elevated border border-edge text-dim/60 group-hover:border-mint/30'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Question text */}
          <span className={`font-display font-semibold text-[0.98rem] leading-snug
                            transition-colors duration-200
                            ${open ? 'text-mint' : 'text-body'}`}>
            {question}
          </span>
        </div>

        {/* Toggle */}
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center
                         flex-shrink-0 transition-all duration-300
                         ${open
                           ? 'bg-mint/10 border-mint/40 rotate-45'
                           : 'bg-elevated border-edge'}`}>
          <span className="text-mint text-[1.15rem] font-light leading-none select-none">
            +
          </span>
        </div>
      </button>

      {/* Answer — smooth CSS grid height */}
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <div className="px-7 pb-7" style={{ paddingLeft: '68px' }}>
            <p className="text-dim text-[0.93rem] leading-[1.85]">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq"
             className="relative py-28 border-b border-edge/60 overflow-hidden">

      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Ambient orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.04) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-14 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                            bg-mint/8 border border-mint/25
                            shadow-[0_2px_12px_rgba(108,92,231,0.08)]">
              <svg className="w-3.5 h-3.5 text-mint flex-shrink-0" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4
                         3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994
                         1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-mint text-[0.8rem] font-semibold tracking-wide">
                {dict.eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.08]
                           text-[clamp(2.2rem,4.5vw,3.4rem)] text-body max-w-[640px]">
              {dict.title}
            </h2>
          </div>
        </Reveal>

        {/* ── FAQ card ── */}
        <Reveal delay={100}>
          <div className="max-w-[860px] mx-auto">
            <div className="bg-panel rounded-[22px] border border-edge/70 overflow-hidden
                            shadow-[0_4px_32px_rgba(0,0,0,0.05),0_1px_4px_rgba(0,0,0,0.03)]">
              {dict.items.map((item, i) => (
                <FAQRow
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  index={i}
                  total={dict.items.length}
                  defaultOpen={i === 0}
                />
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
