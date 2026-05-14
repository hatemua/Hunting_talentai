'use client'

import Link               from 'next/link'
import { useTranslation } from 'react-i18next'
import { contactEmail, contactEmailHref, linkedinUrl, linkedinLabel, registrucentrasUrl, calendlyUrl } from '@/config/site'
import { LegalNav }       from '@/features/legal/components/LegalNav'

type Locale = 'en' | 'fr'

interface TableRow     { label: string; value: string; href?: string; linkLabel?: string; linkHref?: string; cta?: boolean }
interface TableSection { heading: string; rows: TableRow[] }
interface ProseSection { heading: string; text: string; linkLabel?: string; linkHref?: string }

interface PageContent {
  title: string; eyebrow: string; updated: string
  crossLabel: string; crossLink: string
  tables: TableSection[]
  prose:  ProseSection[]
  additionalLabel: string
}

const content: Record<Locale, PageContent> = {
  en: {
    title:           'Imprint · Legal Information',
    eyebrow:         'Imprint · Legal identity',
    updated:         'Last updated: 2026-05-11',
    crossLabel:      'For information on how we process personal data, see our',
    crossLink:       'Privacy policy & GDPR rights',
    additionalLabel: 'Additional information',
    tables: [
      {
        heading: 'Legal entity',
        rows: [
          { label: 'Legal name',              value: 'Talent AI Labs UAB' },
          { label: 'Commercial name',         value: 'Talent AI Hunting' },
          { label: 'Legal form',              value: 'UAB (Lithuanian Uždaroji akcinė bendrovė — Private Limited Company)' },
          { label: 'Company code (registry)', value: '307572423' },
          { label: 'VAT identifier',          value: 'LT307572423' },
          { label: 'Registered office',       value: 'Vilnius, Lithuania. Full registered details available on the Lithuanian Centre of Registers (registrucentras.lt) under company code 307572423.', linkLabel: 'registrucentras.lt', linkHref: registrucentrasUrl },
          { label: 'Date of incorporation',   value: '2025' },
        ],
      },
      {
        heading: 'Representation',
        rows: [
          { label: 'Chief Executive Officer', value: 'Hatem Azaiez' },
          { label: 'Chief Operating Officer', value: 'Shiran Ben Abderrazak' },
        ],
      },
      {
        heading: 'Contact',
        rows: [
          { label: 'General contact',     value: contactEmail,                          href: contactEmailHref },
          { label: 'LinkedIn',            value: linkedinLabel,            href: linkedinUrl },
          { label: 'Book an intake call', value: 'Book a 20-min intake call →', href: calendlyUrl },
        ],
      },
    ],
    prose: [
      { heading: 'Publication',          text: 'The publisher and editorial director of this website is the legal representative of Talent AI Labs UAB.' },
      { heading: 'Hosting',              text: 'This website is hosted on EU-based infrastructure compliant with GDPR requirements. Hosting provider details can be obtained on written request at contact@talentai.bid.', linkLabel: contactEmail, linkHref: contactEmailHref },
      { heading: 'Intellectual property', text: 'All content on this website (text, layout, logo, illustrations, code) is the exclusive property of Talent AI Labs UAB unless otherwise indicated. Reproduction, redistribution or commercial use without prior written authorisation is prohibited.' },
      { heading: 'Applicable law & jurisdiction', text: 'This website and all services provided through it are governed by Lithuanian law. Any dispute that cannot be resolved amicably falls under the jurisdiction of the competent courts of Vilnius, Lithuania, except where mandatory consumer protection rules of another EU member state apply.' },
      { heading: 'Privacy & data protection', text: 'For information on how we collect and process personal data, see our Privacy policy & GDPR rights page.', linkLabel: 'Privacy policy & GDPR rights', linkHref: '/legal' },
    ],
  },
  fr: {
    title:           'Mentions légales · Informations juridiques',
    eyebrow:         'Mentions · Identité légale',
    updated:         'Dernière mise à jour : 11 mai 2026',
    crossLabel:      'Pour les modalités de traitement des données personnelles, voir notre',
    crossLink:       'Politique de confidentialité et droits RGPD',
    additionalLabel: 'Informations complémentaires',
    tables: [
      {
        heading: 'Entité légale',
        rows: [
          { label: 'Raison sociale',          value: 'Talent AI Labs UAB' },
          { label: 'Nom commercial',          value: 'Talent AI Hunting' },
          { label: 'Forme juridique',         value: 'UAB (Uždaroji akcinė bendrovė), équivalent lituanien de la société à responsabilité limitée' },
          { label: 'Code société (registre)', value: '307572423' },
          { label: 'Numéro TVA',              value: 'LT307572423' },
          { label: 'Siège social',            value: 'Vilnius, Lituanie. Le détail de l\'immatriculation est disponible auprès du Centre des registres de Lituanie (registrucentras.lt) sous le code 307572423.', linkLabel: 'registrucentras.lt', linkHref: registrucentrasUrl },
          { label: 'Date d\'immatriculation', value: '2025' },
        ],
      },
      {
        heading: 'Représentation',
        rows: [
          { label: 'Président-directeur général', value: 'Hatem Azaiez' },
          { label: 'Directeur des opérations',    value: 'Shiran Ben Abderrazak' },
        ],
      },
      {
        heading: 'Contact',
        rows: [
          { label: 'Contact général',     value: contactEmail,                          href: contactEmailHref },
          { label: 'LinkedIn',            value: linkedinLabel,            href: linkedinUrl },
          { label: 'Prendre rendez-vous', value: 'Réserver un appel de 20 min →', href: calendlyUrl },
        ],
      },
    ],
    prose: [
      { heading: 'Directeur de la publication', text: 'La direction de la publication du présent site est assurée par le représentant légal de Talent AI Labs UAB.' },
      { heading: 'Hébergement',              text: 'Ce site est hébergé sur une infrastructure située dans l\'Union européenne et conforme aux exigences du RGPD. Les coordonnées précises du prestataire d\'hébergement peuvent être obtenues sur simple demande écrite adressée à contact@talentai.bid.', linkLabel: contactEmail, linkHref: contactEmailHref },
      { heading: 'Propriété intellectuelle', text: 'L\'ensemble du contenu de ce site (textes, mise en page, identité visuelle, illustrations et code source) demeure la propriété exclusive de Talent AI Labs UAB, sauf mention contraire. Toute reproduction, redistribution ou exploitation commerciale sans autorisation écrite préalable est strictement prohibée.' },
      { heading: 'Droit applicable et juridiction compétente', text: 'Le présent site, ainsi que l\'ensemble des services qui y sont attachés, sont soumis au droit lituanien. À défaut de résolution amiable, tout litige relèvera de la compétence exclusive des tribunaux de Vilnius, en Lituanie, sous réserve des règles impératives de protection du consommateur applicables dans un autre État membre de l\'Union européenne.' },
      { heading: 'Protection des données personnelles', text: 'Les modalités de collecte et de traitement des données personnelles sont détaillées dans notre page Politique de confidentialité et droits RGPD.', linkLabel: 'Politique de confidentialité et droits RGPD', linkHref: '/legal' },
    ],
  },
}

export default function ImprintPage() {
  const { i18n } = useTranslation()
  const lang = (i18n.language?.slice(0, 2) ?? 'en') as Locale
  const c    = content[lang] ?? content.en

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
              {sec.rows.map((row, i) => (
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
                    {row.cta ? (
                      <a href={row.href}
                         className="inline-flex items-center gap-2 px-4 py-2 rounded-[10px]
                                    text-[0.82rem] font-semibold transition-all duration-200
                                    shadow-[0_2px_10px_rgba(108,92,231,0.18)]
                                    hover:shadow-[0_4px_20px_rgba(108,92,231,0.30)]
                                    hover:-translate-y-px"
                         style={{ background: 'linear-gradient(135deg,#6C5CE7 0%,#5A4DCF 100%)', color: '#fff' }}>
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {row.value}
                      </a>
                    ) : row.href ? (
                      <a href={row.href}
                         target={row.href.startsWith('http') ? '_blank' : undefined}
                         rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                         className="font-medium underline underline-offset-2 transition-colors duration-200"
                         style={{ color: '#6C5CE7' }}>
                        {row.value}
                      </a>
                    ) : row.linkLabel ? (() => {
                      const [before, after] = row.value.split(row.linkLabel!)
                      return <>{before}<a href={row.linkHref} target="_blank" rel="noopener noreferrer"
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
            {c.prose.map((sec, i) => (
              <div key={sec.heading}
                   className="px-5 py-4"
                   style={{ borderBottom: i < c.prose.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <h3 className="font-display font-semibold text-[0.92rem] tracking-[-0.01em] mb-1.5"
                    style={{ color: '#0F172A' }}>
                  {sec.heading}
                </h3>
                <p className="text-[0.9rem] leading-[1.80]" style={{ color: '#4A5568' }}>
                  {sec.linkLabel ? (() => {
                    const [before, after] = sec.text.split(sec.linkLabel!)
                    return <>{before}<Link href={sec.linkHref!}
                      {...(sec.linkHref!.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="font-medium underline underline-offset-2 transition-colors duration-200"
                      style={{ color: '#6C5CE7' }}>{sec.linkLabel}</Link>{after}</>
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
