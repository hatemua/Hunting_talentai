'use client'

import { useState, useEffect }  from 'react'
import Link                      from 'next/link'
import { usePathname }           from 'next/navigation'
import { useTranslation }        from 'react-i18next'
import Image                      from 'next/image'
import { Button }                from '@/components/ui/Button'
import type { Dictionary, Locale }       from '@/i18n/types'

export function Navbar() {
  const { i18n } = useTranslation()

  const lang = (i18n.language?.slice(0, 2) ?? 'en') as Locale
  const dict = (
    i18n.getResourceBundle(lang, 'translation') ??
    i18n.getResourceBundle('en', 'translation')
  ) as Dictionary

  const pathname = usePathname()
  const setLang = (l: Locale) => i18n.changeLanguage(l)

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#how',     label: dict.nav.howItWorks },
    { href: '#pricing', label: dict.nav.pricing    },
    { href: '#faq',     label: dict.nav.faq        },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'border-b border-edge/60 shadow-[0_4px_24px_rgba(0,0,0,0.07)]'
          : 'border-b border-transparent'}`}
      style={{
        background:           scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.82)',
        backdropFilter:       'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Top mint accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-mint/35 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-[13px] flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/" aria-label="HuntingTalent.ai home" onClick={handleLogoClick}
              className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
          <Image src="/logo-h.png" alt="HuntingTalent.ai" width={160} height={48}
                 className="h-9 w-auto" priority />
        </Link>

        {/* ── Desktop nav links ── */}
        <nav className="hidden md:flex gap-0.5 items-center">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}
               className="relative px-3.5 py-2 rounded-[8px] text-[0.875rem] font-medium
                          text-dim hover:text-body hover:bg-elevated
                          transition-all duration-200 group">
              {label}
              <span className="absolute bottom-[7px] left-1/2 -translate-x-1/2
                               w-0 h-[2px] rounded-full bg-mint
                               transition-all duration-200 group-hover:w-4" />
            </a>
          ))}
        </nav>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2.5">

          {/* Language switcher — sliding segmented control */}
          <div className="relative flex bg-elevated/90 p-[3px] rounded-[10px] border border-edge/70">
            {/* Sliding white pill */}
            <div
              className="absolute top-[3px] bottom-[3px] rounded-[7px] bg-white
                         border border-edge/80
                         shadow-[0_1px_5px_rgba(0,0,0,0.09),0_0_0_1px_rgba(108,92,231,0.06)]
                         transition-all duration-[230ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                         pointer-events-none"
              style={{
                width: 'calc(50% - 3px)',
                left:  lang === 'en' ? '3px' : 'calc(50%)',
              }}
            />
            {(['en', 'fr'] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className={`relative z-10 flex items-center justify-center gap-1.5
                  flex-1 px-3.5 py-[7px] rounded-[7px] cursor-pointer
                  text-[0.71rem] font-bold uppercase tracking-[0.09em]
                  transition-colors duration-200 select-none
                  ${lang === l ? 'text-body' : 'text-dim/70 hover:text-dim'}`}>
                {l === 'en' ? (
                  <svg viewBox="0 0 20 15" className="w-5 h-[15px] rounded-[2px] flex-shrink-0"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" fill="#012169"/>
                    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3"/>
                    <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="2"/>
                    <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5"/>
                    <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 15" className="w-5 h-[15px] rounded-[2px] flex-shrink-0"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" fill="#fff"/>
                    <rect width="6.67" height="15" fill="#002395"/>
                    <rect x="13.33" width="6.67" height="15" fill="#ED2939"/>
                  </svg>
                )}
                <span>{l}</span>
              </button>
            ))}
          </div>

          {/* CTA — desktop */}
          <Button href="#cta" variant="primary" size="md"
                  className="hidden sm:inline-flex items-center gap-1.5">
            {dict.nav.bookCall}
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>

          {/* Hamburger — mobile */}
          <button aria-label="Toggle menu"
                  onClick={() => setMobileOpen((o) => !o)}
                  className="md:hidden w-9 h-9 flex items-center justify-center rounded-[8px]
                             border border-edge hover:bg-elevated transition-colors duration-200">
            <svg className="w-[18px] h-[18px] text-body" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`md:hidden border-t border-edge/50 overflow-hidden
                       transition-all duration-300 ease-in-out
                       ${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}
           style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)' }}>
        <div className="px-6 py-4 space-y-0.5">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)}
               className="flex items-center gap-2 py-2.5 px-3 rounded-[8px] text-[0.9rem]
                          font-medium text-dim hover:text-body hover:bg-elevated
                          transition-all duration-200">
              <span className="w-1 h-1 rounded-full bg-mint/50 flex-shrink-0" />
              {label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <Button href="#cta" variant="primary" size="md" className="w-full justify-center">
              {dict.nav.bookCall}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
