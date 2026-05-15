'use client'

import Link               from 'next/link'
import { useTranslation } from 'react-i18next'
import type { Dictionary } from '@/i18n/types'
import type { TableRow, ProseSection } from '@/features/legal/types'
import { LegalNav }        from '@/features/legal/components/LegalNav'

export default function ImprintPage() {
  const { i18n } = useTranslation()
  const dict = (
    i18n.getResourceBundle(i18n.language, 'translation') ??
    i18n.getResourceBundle('en', 'translation')
  ) as Dictionary
  const c = dict.imprint

  return (
    <div className="min-h-screen" style={{ background: '#F2F5F3' }}>
      <LegalNav />

      {/* ── Hero ── */}
      <div className="border-b border-black/[0.06]"
           style={{ background: 'linear-gradient(160deg, #E8F0EA 0%, #EEF3EF 60%, #F2F5F3 100%)' }}>
        <div className="max-w-[860px] mx-auto px-6 py-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-5
                           text-[0.72rem] font-bold uppercase tracking-[0.11em]"
                style={{ color: '#6C5CE7', background: 'rgba(108,92,231,0.10)', border: '1px solid rgba(108,92,231,0.22)' }}>
            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v14a2 2 0 01-2 2z"/>
              <polyline strokeLinecap="round" strokeLinejoin="round" points="17 21 17 13 7 13 7 21"/>
              <polyline strokeLinecap="round" strokeLinejoin="round" points="7 3 7 8 15 8"/>
            </svg>
            {c.eyebrow}
          </span>
          <h1 className="font-display font-bold tracking-[-0.03em] leading-[1.12] mb-3"
              style={{ fontSize: 'clamp(1.9rem,4vw,2.5rem)', color: '#0F172A' }}>
            {c.title}
          </h1>
          <p className="text-[0.845rem]" style={{ color: '#94A3B8' }}>{c.updated}</p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-[860px] mx-auto px-6 py-12 pb-24 space-y-5">

        {/* Table sections */}
        {c.tables.map((sec) => (
          <section key={sec.heading}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #6C5CE7, rgba(108,92,231,0.3))' }} />
              <h2 className="font-display font-semibold text-[1.05rem] tracking-[-0.02em]"
                  style={{ color: '#0F172A' }}>
                {sec.heading}
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden"
                 style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)' }}>
              {(sec.rows as TableRow[]).map((row, i) => (
                <div key={row.label}
                     className="grid gap-4 px-5 py-3.5"
                     style={{
                       gridTemplateColumns: '38% 1fr',
                       borderBottom: i < sec.rows.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                       background: i % 2 === 0 ? '#FFFFFF' : '#F9FAFB',
                     }}>
                  <span className="text-[0.845rem] font-medium self-start pt-[1px]"
                        style={{ color: '#94A3B8' }}>
                    {row.label}
                  </span>
                  <span className="text-[0.845rem]" style={{ color: '#1E293B' }}>
                    {'href' in row && row.href ? (
                      <a href={row.href}
                         target={row.href.startsWith('http') ? '_blank' : undefined}
                         rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                         className="font-medium underline underline-offset-2 transition-colors duration-200"
                         style={{ color: '#6C5CE7' }}>
                        {row.value}
                      </a>
                    ) : 'linkLabel' in row && row.linkLabel ? (() => {
                      const [before, after] = row.value.split(row.linkLabel!)
                      return <>{before}<a href={(row as { linkHref: string }).linkHref} target="_blank" rel="noopener noreferrer"
                               className="font-medium underline underline-offset-2 transition-colors duration-200"
                               style={{ color: '#6C5CE7' }}>{row.linkLabel}</a>{after}</>
                    })() : row.value}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Prose sections */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 rounded-full" style={{ background: 'linear-gradient(180deg, #6C5CE7, rgba(108,92,231,0.3))' }} />
            <h2 className="font-display font-semibold text-[1.05rem] tracking-[-0.02em]"
                style={{ color: '#0F172A' }}>
              {c.additionalLabel}
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden"
               style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)' }}>
            {(c.prose as ProseSection[]).map((sec, i) => (
              <div key={sec.heading}
                   className="px-5 py-4"
                   style={{ borderBottom: i < c.prose.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <h3 className="font-display font-semibold text-[0.92rem] tracking-[-0.01em] mb-1.5"
                    style={{ color: '#0F172A' }}>
                  {sec.heading}
                </h3>
                <p className="text-[0.9rem] leading-[1.80]" style={{ color: '#4A5568' }}>
                  {'linkLabel' in sec && sec.linkLabel ? (() => {
                    const label = sec.linkLabel as string
                    const href  = (sec as { linkHref: string }).linkHref
                    const [before, after] = sec.text.split(label)
                    return <>{before}<Link href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="font-medium underline underline-offset-2 transition-colors duration-200"
                      style={{ color: '#6C5CE7' }}>{label}</Link>{after}</>
                  })() : sec.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-link */}
        <div className="flex items-center gap-4 px-5 py-4 rounded-2xl"
             style={{ background: 'rgba(108,92,231,0.07)', border: '1px solid rgba(108,92,231,0.18)' }}>
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#6C5CE7' }}
               fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p className="text-[0.875rem]" style={{ color: '#4A5568' }}>
            {c.crossLabel}{' '}
            <Link href="/legal"
                  className="font-medium underline underline-offset-2 transition-colors duration-200"
                  style={{ color: '#6C5CE7' }}>
              {c.crossLink}
            </Link>.
          </p>
        </div>

      </div>
    </div>
  )
}
