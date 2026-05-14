import { Button }  from '@/components/ui/Button'
import { Reveal }  from '@/components/ui/Reveal'
import { CountUp } from '@/components/ui/CountUp'
import type { Dictionary } from '@/i18n/types'

interface HeroProps {
  dict: Dictionary['hero']
}

const TRUST_ITEMS = [
  'No retainer',
  'No exclusivity',
  '90-day guarantee',
  'EU AI Act ready',
]

const AGENTS = [
  { initial: 'Y', name: 'Yuka',  role: 'Technical',  score: 92 },
  { initial: 'S', name: 'Sinda', role: 'Soft Skills', score: 96 },
  { initial: 'O', name: 'Olga',  role: 'HR',          score: 94 },
]

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-canvas min-h-[92vh] flex items-center">

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Ambient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t
                      from-canvas to-transparent pointer-events-none z-10" />

      <div className="max-w-[1200px] xl:max-w-[1480px] mx-auto px-6 xl:px-16 pt-14 sm:pt-20 xl:pt-28 pb-24 w-full relative z-20">

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] xl:grid-cols-[1.2fr_0.8fr]
                        gap-14 xl:gap-28 items-center">

          {/* ── Left: content ── */}
          <div className="max-w-[580px] xl:max-w-none text-center lg:text-left mx-auto lg:mx-0">

            {/* Eyebrow badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                              bg-mint/8 border border-mint/25 mb-8
                              shadow-[0_2px_12px_rgba(108,92,231,0.10)]">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full
                                   rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
                <span className="text-mint text-[0.82rem] font-semibold tracking-wide">
                  {dict.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={80}>
              <h1 className="font-display font-bold tracking-[-0.035em] leading-[1.06]
                             text-[clamp(2.6rem,5.2vw,4.6rem)] xl:text-[5.4rem] mb-6">
                <span className="text-body">{dict.headlinePre} </span>
                <br className="hidden sm:block" />
                <span className="gradient-text-animated">
                  {dict.headlineHighlight.includes('\n')
                    ? dict.headlineHighlight.split('\n').map((part, i, arr) => (
                        <span key={i}>{part}{i < arr.length - 1 && <br />}</span>
                      ))
                    : dict.headlineHighlight}
                </span>
                <span className="text-body">{dict.headlineSuffix}</span>
              </h1>
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={160}>
              <p className="text-dim text-[1.07rem] xl:text-[1.15rem] leading-[1.8] mb-9 max-w-[520px] xl:max-w-[560px] mx-auto lg:mx-0">
                {dict.subheadlinePre}{' '}
                <strong className="text-body font-semibold">{dict.subheadlineBold}</strong>{' '}
                {dict.subheadlineSuffix}
              </p>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3.5 mb-7 justify-center lg:justify-start">
                <Button href="#cta" variant="primary" size="lg">
                  {dict.ctaPrimary}
                </Button>
                <Button href="#how" variant="secondary" size="lg">
                  {dict.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            {/* Trust micro-badges */}
            <Reveal delay={310}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {TRUST_ITEMS.map((t) => (
                  <span key={t}
                        className="inline-flex items-center gap-1.5
                                   text-[0.77rem] font-medium text-dim
                                   bg-elevated border border-edge
                                   px-3 py-1.5 rounded-full">
                    <span className="w-3.5 h-3.5 rounded-full bg-mint/12 border border-mint/30
                                     flex items-center justify-center
                                     text-mint text-[9px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right: AI Validation card ── */}
          <div className="hidden lg:block relative">

            {/* Ambient behind card */}
            <div className="absolute inset-[-60px] rounded-full bg-mint/[0.06]
                            blur-[80px] pointer-events-none" />

            <Reveal delay={200} from="right">
              <div className="relative bg-white rounded-[22px] border border-edge
                              shadow-[0_32px_80px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]
                              p-6 xl:p-8 overflow-hidden">

                {/* Top tint */}
                <div className="absolute inset-x-0 top-0 h-28
                                bg-gradient-to-b from-mint/[0.04] to-transparent
                                pointer-events-none" />

                {/* ── Card header ── */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-[10px] bg-mint/10 border border-mint/25
                                    flex items-center justify-center
                                    text-mint text-sm font-bold flex-shrink-0">
                      ✓
                    </div>
                    <span className="font-display font-semibold text-body text-[0.9rem]">
                      AI Validation Complete
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold
                                   text-mint bg-mint/8 border border-mint/25
                                   px-2.5 py-[5px] rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                    Live
                  </span>
                </div>

                {/* ── Candidate row ── */}
                <div className="flex items-center gap-3 p-3.5 bg-elevated rounded-[12px]
                                border border-edge/60 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-full flex-shrink-0
                                  bg-gradient-to-br from-mint to-mint-dark
                                  flex items-center justify-center
                                  text-white font-bold text-sm">
                    JD
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-body text-[0.88rem] leading-snug">
                      Senior Frontend Engineer
                    </div>
                    <div className="text-dim text-[0.74rem] mt-0.5">
                      React · TypeScript · Node.js
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[0.68rem] text-dim">Match</div>
                    <div className="font-display font-bold text-mint text-[0.95rem] leading-tight">
                      94%
                    </div>
                  </div>
                </div>

                {/* ── Overall score bar ── */}
                <div className="mb-5 relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.74rem] font-medium text-dim">
                      Overall Match Score
                    </span>
                    <span className="font-display font-bold text-body text-[0.88rem]">
                      94
                      <span className="text-dim font-normal text-[0.74rem]">/100</span>
                    </span>
                  </div>
                  <div className="h-[7px] bg-edge rounded-full overflow-hidden">
                    <div className="hero-score-bar h-full rounded-full
                                    bg-gradient-to-r from-mint-dark via-mint to-emerald-400" />
                  </div>
                </div>

                {/* ── Agent breakdown ── */}
                <div className="grid gap-2 mb-5 relative z-10">
                  {AGENTS.map((a) => (
                    <div key={a.name}
                         className="flex items-center gap-2.5 px-3 py-2.5
                                    rounded-[10px] bg-elevated border border-edge/60
                                    hover:border-mint/25 transition-colors duration-200">
                      <div className="w-7 h-7 rounded-full bg-white border border-edge
                                      flex items-center justify-center
                                      text-[0.64rem] font-bold text-mint flex-shrink-0">
                        {a.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[0.75rem] font-medium text-body">
                            {a.name}
                            <span className="text-dim font-normal"> · {a.role}</span>
                          </span>
                          <span className="text-[0.75rem] font-bold text-body">{a.score}</span>
                        </div>
                        <div className="h-[4px] bg-edge rounded-full overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-mint/50 to-mint"
                               style={{ width: `${a.score}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Verified footer ── */}
                <div className="flex gap-4 pt-4 border-t border-edge relative z-10">
                  {['Identity verified', 'No fraud detected'].map((label) => (
                    <span key={label}
                          className="flex items-center gap-1.5
                                     text-[0.75rem] font-semibold text-mint">
                      <span className="w-4 h-4 rounded-full bg-mint/10 border border-mint/25
                                       flex items-center justify-center text-[9px] flex-shrink-0">
                        ✓
                      </span>
                      {label}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>

            {/* ── Floating card: time to hire ── */}
            <div className="hero-float-1 absolute -bottom-5 -left-10 z-20">
              <div className="bg-white rounded-[14px] border border-edge
                              shadow-[0_8px_28px_rgba(0,0,0,0.10),0_2px_6px_rgba(0,0,0,0.05)]
                              p-3.5 flex items-center gap-3 min-w-[168px]">
                <div className="w-9 h-9 rounded-[10px] bg-mint/10 border border-mint/20
                                flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-mint" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.67rem] text-dim leading-none mb-1">
                    Avg. time to hire
                  </div>
                  <div className="font-display font-bold text-body text-[1rem] leading-none">
                    18 days
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating card: compliance ── */}
            <div className="hero-float-2 absolute -top-5 -right-8 z-20">
              <div className="bg-white rounded-[14px] border border-edge
                              shadow-[0_8px_28px_rgba(0,0,0,0.10),0_2px_6px_rgba(0,0,0,0.05)]
                              p-3.5 flex items-center gap-3 min-w-[158px]">
                <div className="w-9 h-9 rounded-[10px] bg-mint/10 border border-mint/20
                                flex items-center justify-center flex-shrink-0">
                  <svg className="w-[18px] h-[18px] text-mint" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.67rem] text-dim leading-none mb-1">
                    Compliance
                  </div>
                  <div className="font-display font-bold text-body text-[0.88rem] leading-none">
                    EU AI Act ready
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* end right column */}

        </div>
        {/* end two-column grid */}

        {/* ── Stats strip ── */}
        <Reveal delay={420}>
          <div className="section-divider mt-16 mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dict.stats.map((s) => (
              <div key={s.num} className="stat-card">
                <div className="font-display font-bold text-[2.5rem] leading-none mb-1.5 num-gradient">
                  <CountUp value={s.num} />
                </div>
                <p className="text-dim text-[0.85rem] leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
