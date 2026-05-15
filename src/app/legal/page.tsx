'use client'

import Link               from 'next/link'
import { useTranslation } from 'react-i18next'
import type { Dictionary } from '@/i18n/types'
import type { Block } from '@/features/legal/types'
import { contactEmail, contactEmailHref, vdaiUrl } from '@/config/site'
import { LegalNav }        from '@/features/legal/components/LegalNav'

function RenderBlock({ block, idx }: { block: Block; idx: number }) {
  if ('items' in block) return (
    <ul key={idx} className="space-y-2.5 mb-4 list-none p-0">
      {block.items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[0.925rem] leading-[1.8]"
            style={{ color: '#4A5568' }}>
          <span className="mt-[0.55em] w-[5px] h-[5px] rounded-full flex-shrink-0"
                style={{ background: 'rgba(108,92,231,0.55)' }} />
          <span>
            {item.bold && (
              <strong className="font-semibold" style={{ color: '#1E293B' }}>
                {item.bold}
              </strong>
            )}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
  if (block.type === 'h3') return (
    <h3 key={idx} className="font-display font-semibold text-[0.97rem] text-body/85
                              tracking-[-0.01em] mt-6 mb-2.5">
      {block.text}
    </h3>
  )
  return (
    <p key={idx} className="text-[0.925rem] leading-[1.85] mb-3.5"
       style={{ color: '#4A5568' }}>
      {block.linkLabel
        ? (() => {
            const label = block.linkLabel === '#contactEmail' ? contactEmail : block.linkLabel!
            const href  = block.linkHref  === '#contactEmailHref' ? contactEmailHref
                        : block.linkHref  === '#vdaiUrl'          ? vdaiUrl
                        : block.linkHref!
            const text  = block.text.replace('#contactEmail', label)
            const [before, after] = text.split(label)
            return <>{before}<Link href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-medium underline underline-offset-2 transition-colors duration-200"
              style={{ color: '#6C5CE7' }}>{label}</Link>{after}</>
          })()
        : block.text}
    </p>
  )
}

export default function LegalPage() {
  const { i18n } = useTranslation()
  const dict = (
    i18n.getResourceBundle(i18n.language, 'translation') ??
    i18n.getResourceBundle('en', 'translation')
  ) as Dictionary
  const c = dict.legal

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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
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
      <div className="max-w-[860px] mx-auto px-6 py-12 pb-24">

        <div className="space-y-3">
          {c.sections.map((sec, si) => (
            <div key={sec.heading}
                 className="rounded-2xl overflow-hidden"
                 style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)' }}>

              {/* Section header */}
              <div className="flex items-center gap-4 px-6 py-5"
                   style={{ borderBottom: '1px solid rgba(0,0,0,0.06)',
                            background: 'linear-gradient(90deg, rgba(108,92,231,0.04) 0%, transparent 60%)' }}>
                <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                                 font-display font-bold text-[0.70rem]"
                      style={{ background: 'rgba(108,92,231,0.10)', border: '1px solid rgba(108,92,231,0.18)', color: '#6C5CE7' }}>
                  {String(si + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display font-semibold text-[1.05rem] tracking-[-0.02em]"
                    style={{ color: '#0F172A' }}>
                  {sec.heading.replace(/^\d+\.\s*/, '')}
                </h2>
              </div>

              {/* Section body */}
              <div className="px-6 py-5">
                {(sec.blocks as Block[]).map((block, i) => (
                  <RenderBlock key={i} block={block} idx={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cross-link */}
        <div className="mt-6 flex items-center gap-4 px-5 py-4 rounded-2xl"
             style={{ background: 'rgba(108,92,231,0.07)', border: '1px solid rgba(108,92,231,0.18)' }}>
          <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#6C5CE7' }}
               fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p className="text-[0.875rem]" style={{ color: '#4A5568' }}>
            {c.crossLabel}{' '}
            <Link href="/imprint"
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
