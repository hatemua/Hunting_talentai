import { Button } from '@/components/ui/Button'
import { Reveal }  from '@/components/ui/Reveal'
import { contactEmailHref, calendlyUrl } from '@/config/site'
import type { Dictionary } from '@/i18n/types'

interface FinalCTAProps {
  dict: Dictionary['cta']
}

export function FinalCTA({ dict }: FinalCTAProps) {
  return (
    <section id="cta" className="relative py-32 text-center overflow-hidden bg-elevated">

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />

      {/* Ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[400px] rounded-full pointer-events-none
                      bg-mint/[0.08] blur-[100px]" />

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-24
                      bg-gradient-to-b from-elevated to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24
                      bg-gradient-to-t from-elevated to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Small badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                          bg-mint/8 border border-mint/20 mb-8
                          text-mint text-[0.8rem] font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-glow" />
            No retainer. No exclusivity.
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.1]
                         text-[clamp(2rem,5vw,3.8rem)] max-w-[800px] mx-auto mb-6">
            <span className="text-body">{dict.title.split('.')[0]}.</span>
            {dict.title.includes('.') && dict.title.split('.')[1] && (
              <>
                {' '}
                <span className="gradient-text-animated">
                  {dict.title.split('.').slice(1).join('.').trim()}
                </span>
              </>
            )}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-dim text-[1.1rem] leading-[1.8] max-w-[580px] mx-auto mb-12">
            {dict.subtitle}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href={calendlyUrl}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.primaryBtn}
            </Button>
            <Button href={contactEmailHref} variant="secondary" size="lg">
              {dict.secondaryBtn}
            </Button>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
