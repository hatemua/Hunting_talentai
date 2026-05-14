import { Button }          from '@/components/ui/Button'
import { Reveal }          from '@/components/ui/Reveal'
import type { Dictionary } from '@/i18n/types'

interface PricingProps {
  dict: Dictionary['pricing']
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3.5 bg-mint/[0.04] rounded-[13px]
                   border border-mint/15 px-5 py-4
                   transition-all duration-200 hover:border-mint/30 hover:bg-mint/[0.06]">
      <span className="w-5 h-5 rounded-full bg-mint/15 border border-mint/35
                       flex items-center justify-center flex-shrink-0 mt-[1px]">
        <svg className="w-3 h-3 text-mint" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth="2.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-[0.92rem] text-body/90 leading-snug">{text}</span>
    </li>
  )
}

export function Pricing({ dict }: PricingProps) {
  return (
    <section id="pricing"
             className="relative py-28 border-b border-edge/60 bg-elevated overflow-hidden">

      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      {/* Centered mint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[900px] h-[560px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, rgba(108,92,231,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* ── Header (centered) ── */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6
                            bg-mint/8 border border-mint/25
                            shadow-[0_2px_12px_rgba(108,92,231,0.08)]">
              <svg className="w-3.5 h-3.5 text-mint flex-shrink-0" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0
                         010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0
                         013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-mint text-[0.8rem] font-semibold tracking-wide">
                {dict.eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.1]
                           text-[clamp(2rem,4vw,3.2rem)] text-body max-w-[680px] mx-auto">
              {dict.title}
            </h2>
          </div>
        </Reveal>

        {/* ── Pricing card ── */}
        <Reveal delay={120}>
          <div className="max-w-[640px] mx-auto">

            {/* Floating badge */}
            <div className="flex justify-center mb-[-16px] relative z-20">
              <span className="inline-flex items-center gap-2 bg-mint text-white
                               text-[0.72rem] font-bold uppercase tracking-[0.12em]
                               px-5 py-2 rounded-full
                               shadow-[0_4px_20px_rgba(108,92,231,0.40)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                {dict.offerBadge}
              </span>
            </div>

            {/* Animated-border card */}
            <div className="pricing-card">
              <div className="pricing-card-inner px-8 py-12 sm:px-12">

                {/* Offer headline */}
                <p className="font-display font-bold text-body text-center
                               text-[clamp(1.4rem,2.8vw,2rem)] leading-tight mb-8">
                  {dict.offerHeadline}
                </p>

                {/* Big price */}
                <div className="text-center mb-2">
                  <span className="font-display font-bold text-[clamp(5rem,12vw,7rem)]
                                   leading-none gradient-text-animated">
                    {dict.offerPrice}
                  </span>
                </div>
                <p className="text-center text-dim text-[0.78rem] uppercase tracking-[0.14em]
                               font-semibold mb-8">
                  success fee · on placement only
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-edge to-transparent mb-8" />

                {/* Subtext */}
                <p className="text-dim text-[0.95rem] leading-[1.8] text-center
                               max-w-[480px] mx-auto mb-9">
                  {dict.offerSubtext}
                </p>

                {/* Inclusions */}
                <ul className="grid gap-3 mb-10">
                  {dict.inclusions.map((text, i) => (
                    <CheckItem key={i} text={text} />
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-center">
                  <Button href="#cta" variant="primary" size="lg"
                          className="w-full sm:w-auto justify-center gap-2">
                    {dict.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>

              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  )
}
