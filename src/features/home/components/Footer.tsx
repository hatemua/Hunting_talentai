'use client'

import Link            from 'next/link'
import Image           from 'next/image'
import { usePathname } from 'next/navigation'
import { linkedinUrl, linkedinLabel, calendlyUrl } from '@/config/site'
import type { Dictionary } from '@/i18n/types'

interface FooterProps {
  dict: Dictionary['footer']
}

export function Footer({ dict }: FooterProps) {
  const pathname = usePathname()

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden"
            style={{ background: 'linear-gradient(145deg, #0d0b1e 0%, #08061a 45%, #050414 100%)' }}>

      {/* Subtle ambient glow */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(139,127,240,0.08) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(108,92,231,0.06) 0%, transparent 65%)' }} />

      {/* Top accent */}
      <div className="h-px w-full"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(139,127,240,0.6) 40%, rgba(167,139,250,1) 50%, rgba(139,127,240,0.6) 60%, transparent)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-14 pb-10">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-[2.2fr_1fr_1.2fr] gap-10 lg:gap-16 pb-10"
             style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* ── Brand ── */}
          <div className="flex flex-col gap-5">

            <Link href="/" onClick={handleLogoClick}
                  className="flex-shrink-0 transition-transform duration-300 hover:scale-105 w-fit">
              <Image src="/logo-v.png" alt="HuntingTalent.ai" width={160} height={160}
                     className="w-28 h-auto" />
            </Link>

            <p className="text-[1rem] font-semibold leading-snug tracking-[-0.01em]"
               style={{ color: 'rgba(255,255,255,0.85)' }}>
              {dict.tagline}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {dict.taglineDetail.split(' + ').map((chip) => (
                <span key={chip}
                      className="inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-md text-[0.73rem]"
                      style={{ color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                        style={{ background: '#8B7FF0' }} />
                  {chip}
                </span>
              ))}
            </div>

            <div className="space-y-1">
              <p className="flex items-center gap-1.5 text-[0.80rem]"
                 style={{ color: 'rgba(255,255,255,0.32)' }}>
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                {dict.taglineLocation}
              </p>
              <p className="text-[0.78rem]" style={{ color: 'rgba(255,255,255,0.22)' }}>
                {dict.taglineMarkets}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.72rem] font-semibold"
                    style={{ color: '#C4B5FD', background: 'rgba(139,127,240,0.10)', border: '1px solid rgba(139,127,240,0.22)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: '#C4B5FD', boxShadow: '0 0 6px rgba(196,181,253,0.7)' }} />
                {dict.complianceBadge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.72rem] font-medium"
                    style={{ color: 'rgba(196,181,253,0.75)', background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.18)' }}>
                <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Hedera Foundation
              </span>
            </div>
          </div>

          {/* ── Navigate ── */}
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] mb-5"
               style={{ color: 'rgba(139,127,240,0.50)' }}>
              {dict.navTitle}
            </p>
            <ul className="space-y-2">
              {dict.navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}
                     className="text-[0.875rem] transition-colors duration-200 flex items-center gap-2 group/lnk"
                     style={{ color: 'rgba(255,255,255,0.42)' }}
                     onMouseOver={e => (e.currentTarget.style.color = '#C4B5FD')}
                     onMouseOut={e  => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}>
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200
                                     group-hover/lnk:scale-150"
                          style={{ background: 'rgba(139,127,240,0.40)' }} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact & legal ── */}
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] mb-5"
               style={{ color: 'rgba(139,127,240,0.50)' }}>
              {dict.contactTitle}
            </p>
            <ul className="space-y-2">
              {dict.contactLinks.map((l) => {
                const isCta   = l.href === '#cta'
                const href    = isCta ? calendlyUrl : l.href
                const isLegal = href === '/legal' || href === '/imprint'
                const isEmail = href.startsWith('mailto:')
                const isLI    = href.includes('linkedin')

                const baseColor  = isCta ? '#A78BFA' : isLegal ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.42)'
                const hoverColor = isCta ? '#C4B5FD' : isLegal ? 'rgba(196,181,253,0.75)' : '#C4B5FD'

                return (
                  <li key={l.href}>
                    <a href={href}
                       target={l.external || isCta ? '_blank' : undefined}
                       rel={l.external || isCta ? 'noopener noreferrer' : undefined}
                       className="flex items-center gap-2 text-[0.875rem] transition-colors duration-200"
                       style={{ color: baseColor, fontWeight: isCta ? 600 : 400 }}
                       onMouseOver={e => (e.currentTarget.style.color = hoverColor)}
                       onMouseOut={e  => (e.currentTarget.style.color = baseColor)}>

                      {isCta && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
                      {isEmail && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>}
                      {isLI && <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                      {isLegal && <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                      {!isCta && !isEmail && !isLI && !isLegal && (
                        <span className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: 'rgba(139,127,240,0.40)' }} />
                      )}

                      {l.label}

                      {l.external && !isLI && (
                        <svg className="w-3 h-3 flex-shrink-0 ml-auto opacity-40" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-6">
          <span className="text-[0.77rem]" style={{ color: 'rgba(255,255,255,0.24)' }}>
            {dict.copyright}
          </span>
          <span className="text-[0.73rem]" style={{ color: 'rgba(255,255,255,0.24)' }}>
            {dict.stack}
          </span>
        </div>

      </div>
    </footer>
  )
}
