'use client'

import Link               from 'next/link'
import Image              from 'next/image'
import { useTranslation } from 'react-i18next'

type Locale = 'en' | 'fr'

const t = {
  en: { back: 'Back to home', home: 'Home', docs: 'Legal docs' },
  fr: { back: 'Retour à l\'accueil', home: 'Accueil', docs: 'Documents légaux' },
}

export function LegalNav() {
  const { i18n } = useTranslation()
  const lang    = (i18n.language?.slice(0, 2) ?? 'en') as Locale
  const setLang = (l: Locale) => i18n.changeLanguage(l)
  const c       = t[lang]

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/[0.07]"
      style={{
        background:           'rgba(242,246,243,0.94)',
        backdropFilter:       'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow:            '0 1px 0 rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)',
      }}
    >
      {/* Mint accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-mint/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-[11px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
          <Image src="/logo-h.png" alt="HuntingTalent.ai" width={160} height={48}
                 className="h-9 w-auto" priority />
        </Link>

        {/* ── Breadcrumb (desktop) ── */}
        <nav className="hidden sm:flex items-center gap-1.5 text-[0.80rem]"
             aria-label="breadcrumb">
          <Link href="/"
                className="text-dim/60 hover:text-mint transition-colors duration-200 font-medium">
            {c.home}
          </Link>
          <svg className="w-3 h-3 flex-shrink-0 text-dim/30" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
          <span className="text-dim/50 font-medium">{c.docs}</span>
        </nav>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2.5">

          {/* Language switcher */}
          <div className="relative flex bg-white/70 p-[3px] rounded-[10px]
                          border border-black/[0.10]
                          shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
            <div
              className="absolute top-[3px] bottom-[3px] rounded-[7px] bg-white
                         border border-black/[0.10]
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
                  flex-1 px-3 py-[6px] rounded-[7px] cursor-pointer
                  text-[0.71rem] font-bold uppercase tracking-[0.09em]
                  transition-colors duration-200 select-none
                  ${lang === l ? 'text-body' : 'text-dim/60 hover:text-dim'}`}>
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

          {/* Back to home */}
          <Link href="/"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-[7px]
                           rounded-[9px] text-[0.82rem] font-medium
                           text-dim/70 hover:text-body
                           bg-white/60 hover:bg-white
                           border border-black/[0.09] hover:border-black/[0.14]
                           shadow-[0_1px_3px_rgba(0,0,0,0.05)]
                           transition-all duration-200">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
            {c.back}
          </Link>
        </div>

      </div>
    </header>
  )
}
