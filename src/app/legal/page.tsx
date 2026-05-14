'use client'

import Link               from 'next/link'
import { useTranslation } from 'react-i18next'
import { contactEmail, vdaiUrl } from '@/config/site'
import { LegalNav }       from '@/features/legal/components/LegalNav'

type Locale   = 'en' | 'fr'
type ListItem = { text: string; bold?: string }
type Block    =
  | { type: 'p';  text: string; linkLabel?: string; linkHref?: string }
  | { type: 'ul'; items: ListItem[] }
  | { type: 'h3'; text: string }

interface Section     { heading: string; blocks: Block[] }
interface PageContent {
  title: string; eyebrow: string; updated: string
  crossLabel: string; crossLink: string
  sections: Section[]
}

const content: Record<Locale, PageContent> = {
  en: {
    title:      'Privacy policy & GDPR rights',
    eyebrow:    'Legal · GDPR',
    updated:    'Last updated: 2026-05-11 · Effective immediately',
    crossLabel: 'For legal information about our entity, see',
    crossLink:  'the Imprint page',
    sections: [
      {
        heading: '1. Who we are',
        blocks: [
          { type: 'p', text: 'Talent AI Labs UAB ("Talent AI Hunting", "we", "us") is a private limited company incorporated in Lithuania under company code 307572423, registered office in Vilnius, Lithuania. We operate as an AI-native recruitment agency placing candidates across the EU, UK, US, Canada and remote-friendly Web3 ecosystems.' },
          { type: 'p', text: 'The full legal information about our entity is available on our Imprint page.', linkLabel: 'Imprint page', linkHref: '/imprint' },
        ],
      },
      {
        heading: '2. Data we collect',
        blocks: [
          { type: 'h3', text: '2.1. When you visit this website' },
          { type: 'ul', items: [
            { bold: 'Technical data:',                     text: ' IP address, browser type, device type, pages visited, referrer URL, session duration' },
            { bold: 'Functional data:',                    text: ' language preference stored in your browser\'s local storage (no cookie)' },
            { bold: 'No analytics or advertising cookies', text: ' are loaded by default. If/when we add analytics, we will request your consent first via a cookie banner.' },
          ]},
          { type: 'h3', text: '2.2. When you book an intake call' },
          { type: 'ul', items: [
            { bold: 'Identity:',       text: ' first and last name, professional email, company name, role' },
            { bold: 'Hiring context:', text: ' role you want to fill, target salary band, hiring timeline, location requirements' },
            {                           text: 'This data is processed via our scheduling tool (Calendly) and stored in our CRM.' },
          ]},
          { type: 'h3', text: '2.3. When we run a recruitment search on your behalf' },
          { type: 'ul', items: [
            { bold: 'Client data:',    text: ' billing details, contract terms, role specifications, hiring manager contact' },
            { bold: 'Candidate data:', text: ' CVs, video validation footage, interview scores, references — processed under the specific consent obtained from each candidate' },
          ]},
        ],
      },
      {
        heading: '3. Why we process this data',
        blocks: [
          { type: 'p', text: 'We rely on the following legal bases under Article 6 GDPR:' },
          { type: 'ul', items: [
            { bold: 'Consent (Art. 6.1.a):',              text: ' for marketing emails, analytics cookies (if/when enabled), candidate video validation' },
            { bold: 'Contract performance (Art. 6.1.b):', text: ' to deliver recruitment services to our clients' },
            { bold: 'Legitimate interest (Art. 6.1.f):',  text: ' for security logs, fraud prevention, technical operation of the site. You have the right to object — see §6.' },
            { bold: 'Legal obligation (Art. 6.1.c):',     text: ' for accounting, tax records, and compliance reporting' },
          ]},
        ],
      },
      {
        heading: '4. EU AI Act compliance',
        blocks: [
          { type: 'p', text: 'Recruitment is classified as a high-risk use case under Annex III of the EU AI Act. Where AI is used in the candidate evaluation pipeline, we apply:' },
          { type: 'ul', items: [
            { bold: 'Article 13 — Transparency:',          text: ' candidates are informed when their evaluation involves AI scoring or AI video validation' },
            { bold: 'Article 14 — Human oversight:',       text: ' no hire decision is taken on AI score alone; a human recruiter reviews and validates every shortlist' },
            { bold: 'Article 15 — Accuracy & robustness:', text: ' bias monitoring with full audit trail, retained for the legal retention period' },
          ]},
        ],
      },
      {
        heading: '5. How long we keep your data',
        blocks: [
          { type: 'ul', items: [
            { bold: 'Website analytics (when enabled):', text: ' 13 months max' },
            { bold: 'CRM contact data:',                 text: ' as long as the commercial relationship is active, then 3 years for follow-up, deleted on request' },
            { bold: 'Recruitment candidate files:',      text: ' 2 years after the last interaction unless the candidate consents to longer retention' },
            { bold: 'Accounting records:',               text: ' 10 years (Lithuanian legal requirement)' },
          ]},
        ],
      },
      {
        heading: '6. Your rights under GDPR',
        blocks: [
          { type: 'p', text: 'You have the right to:' },
          { type: 'ul', items: [
            { bold: 'Access',         text: ' the data we hold about you (Art. 15)' },
            { bold: 'Rectify',        text: ' inaccurate or incomplete data (Art. 16)' },
            { bold: 'Erase',          text: ' your data ("right to be forgotten", Art. 17)' },
            { bold: 'Restrict',       text: ' our processing (Art. 18)' },
            { bold: 'Port',           text: ' your data to another provider (Art. 20)' },
            { bold: 'Object',         text: ' to processing based on legitimate interest (Art. 21)' },
            { bold: 'Not be subject', text: ' to a decision based solely on automated processing (Art. 22) — which is why we always have a human reviewer in the recruitment pipeline' },
          ]},
          { type: 'p', text: `To exercise any of these rights, contact us at ${contactEmail} or via LinkedIn. We respond within 30 days.` },
        ],
      },
      {
        heading: '7. International data transfers',
        blocks: [
          { type: 'p', text: 'Some of our infrastructure providers (e.g. AWS Bedrock for our LLM layer) may process data outside the EEA. In those cases we rely on Standard Contractual Clauses (SCCs) approved by the European Commission and ensure equivalent protection.' },
        ],
      },
      {
        heading: '8. Complaints',
        blocks: [
          { type: 'p', text: 'If you believe your rights are not being respected, you have the right to lodge a complaint with the supervisory authority. Our lead supervisory authority is:' },
          { type: 'p', text: 'State Data Protection Inspectorate of Lithuania (Valstybinė duomenų apsaugos inspekcija) — vdai.lrv.lt', linkLabel: 'vdai.lrv.lt', linkHref: vdaiUrl },
          { type: 'p', text: 'EU residents may also complain to their national supervisory authority (e.g. CNIL in France, BfDI in Germany, ICO in the UK).' },
        ],
      },
      {
        heading: '9. Changes to this policy',
        blocks: [
          { type: 'p', text: 'We update this policy when our practices evolve. The "last updated" date at the top of this page reflects the latest version. Material changes are announced via LinkedIn and email to clients on file.' },
        ],
      },
    ],
  },
  fr: {
    title:      'Politique de confidentialité & droits RGPD',
    eyebrow:    'Mentions légales · RGPD',
    updated:    'Dernière mise à jour : 11 mai 2026 · Entrée en vigueur immédiate',
    crossLabel: 'Pour les informations légales sur notre entité, voir',
    crossLink:  'les Mentions légales',
    sections: [
      {
        heading: '1. Qui sommes-nous',
        blocks: [
          { type: 'p', text: 'Talent AI Labs UAB (ci-après « Talent AI Hunting », « nous ») est une société à responsabilité limitée de droit lituanien, immatriculée sous le code 307572423 et dont le siège se situe à Vilnius, en Lituanie. Notre activité est celle d\'une agence de recrutement nativement fondée sur l\'intelligence artificielle. Nous plaçons des candidats au sein de l\'Union européenne, du Royaume-Uni, des États-Unis, du Canada, ainsi que dans les écosystèmes Web3 fonctionnant à distance.' },
          { type: 'p', text: "L'ensemble des informations légales relatives à notre entité figure sur la page Mentions légales.", linkLabel: 'Mentions légales', linkHref: '/imprint' },
        ],
      },
      {
        heading: '2. Données que nous collectons',
        blocks: [
          { type: 'h3', text: '2.1. Lorsque vous consultez ce site' },
          { type: 'ul', items: [
            { bold: 'Données techniques :',                          text: ' adresse IP, type de navigateur et d\'appareil, pages consultées, URL d\'origine, durée de la session.' },
            { bold: 'Données fonctionnelles :',                      text: ' votre préférence de langue, conservée dans le stockage local de votre navigateur sans recours à un cookie.' },
            { bold: 'Aucun cookie de mesure d\'audience ou de publicité', text: ' n\'est déposé par défaut. Si nous activons un outil de mesure à l\'avenir, votre consentement sera recueilli au préalable.' },
          ]},
          { type: 'h3', text: '2.2. Lorsque vous prenez rendez-vous avec nous' },
          { type: 'ul', items: [
            { bold: 'Identité :',               text: ' nom, prénom, adresse électronique professionnelle, entreprise, fonction.' },
            { bold: 'Contexte de recrutement :', text: ' poste à pourvoir, fourchette de rémunération visée, calendrier de recrutement, contraintes géographiques.' },
            {                                    text: 'Ces informations sont collectées via Calendly et conservées dans notre CRM.' },
          ]},
          { type: 'h3', text: '2.3. Lorsque nous menons une mission de recrutement pour vous' },
          { type: 'ul', items: [
            { bold: 'Données client :',    text: ' coordonnées de facturation, conditions contractuelles, fiche de poste, contact du responsable du recrutement.' },
            { bold: 'Données candidats :', text: ' CV, enregistrements de validation vidéo, notations d\'entretien, références — traités sur la base du consentement explicite de chaque candidat.' },
          ]},
        ],
      },
      {
        heading: '3. Pourquoi nous traitons ces données',
        blocks: [
          { type: 'p', text: 'Les traitements reposent sur les fondements juridiques suivants (article 6 du RGPD) :' },
          { type: 'ul', items: [
            { bold: 'Consentement (article 6.1.a) :',        text: ' envois marketing, dépôt de cookies de mesure si activés, validation vidéo des candidats.' },
            { bold: 'Exécution du contrat (article 6.1.b) :', text: ' fourniture de notre service de recrutement aux clients.' },
            { bold: 'Intérêt légitime (article 6.1.f) :',    text: ' journalisation de sécurité, prévention de la fraude, bon fonctionnement technique du site. Vous pouvez vous opposer à ce traitement (voir §6).' },
            { bold: 'Obligation légale (article 6.1.c) :',   text: ' tenue de la comptabilité, déclarations fiscales et reporting de conformité.' },
          ]},
        ],
      },
      {
        heading: '4. Conformité à l\'EU AI Act',
        blocks: [
          { type: 'p', text: 'Le recrutement figure parmi les usages à haut risque listés à l\'Annexe III de l\'EU AI Act. Lorsqu\'une IA intervient dans l\'évaluation des candidats, nous appliquons :' },
          { type: 'ul', items: [
            { bold: 'Article 13, transparence :',            text: ' les candidats sont informés dès lors que leur évaluation fait appel à une notation ou à une validation vidéo par IA.' },
            { bold: 'Article 14, supervision humaine :',     text: ' aucune décision d\'embauche ne repose sur la seule notation algorithmique ; un recruteur humain examine et valide chaque liste courte.' },
            { bold: 'Article 15, exactitude et robustesse :', text: ' les biais sont suivis avec une piste d\'audit complète, conservée pendant toute la durée légale de rétention.' },
          ]},
        ],
      },
      {
        heading: '5. Durées de conservation',
        blocks: [
          { type: 'ul', items: [
            { bold: 'Mesure d\'audience (si activée) :', text: ' 13 mois au maximum.' },
            { bold: 'Données CRM :',                    text: ' pendant toute la durée de la relation commerciale, puis 3 ans à des fins de relance. Suppression possible sur demande.' },
            { bold: 'Dossiers de candidats :',          text: ' 2 ans après la dernière interaction, sauf consentement exprès pour une conservation prolongée.' },
            { bold: 'Documents comptables :',           text: ' 10 ans, conformément à la législation lituanienne.' },
          ]},
        ],
      },
      {
        heading: '6. Vos droits',
        blocks: [
          { type: 'p', text: 'Vous disposez des droits suivants :' },
          { type: 'ul', items: [
            { bold: 'Accéder',           text: ' aux données qui vous concernent (article 15).' },
            { bold: 'Faire rectifier',   text: ' des données inexactes ou incomplètes (article 16).' },
            { bold: 'Demander l\'effacement', text: ' de vos données, le « droit à l\'oubli » (article 17).' },
            { bold: 'Limiter',           text: ' le traitement (article 18).' },
            { bold: 'Recevoir',          text: ' vos données dans un format portable (article 20).' },
            { bold: 'Vous opposer',      text: ' à un traitement fondé sur notre intérêt légitime (article 21).' },
            { bold: 'Ne pas faire l\'objet d\'une décision entièrement automatisée', text: ' (article 22), d\'où notre garantie de supervision humaine systématique.' },
          ]},
          { type: 'p', text: `Pour exercer l'un de ces droits, écrivez-nous à ${contactEmail} ou via LinkedIn. Nous répondons dans un délai de 30 jours.` },
        ],
      },
      {
        heading: '7. Transferts internationaux de données',
        blocks: [
          { type: 'p', text: 'Certains prestataires d\'infrastructure (AWS Bedrock pour la couche modèle) peuvent traiter des données hors EEE. Ces transferts sont encadrés par les Clauses Contractuelles Types de la Commission européenne.' },
        ],
      },
      {
        heading: '8. Réclamations',
        blocks: [
          { type: 'p', text: 'Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de l\'autorité de contrôle compétente. Notre autorité chef de file est :' },
          { type: 'p', text: 'Inspection nationale de protection des données de Lituanie (Valstybinė duomenų apsaugos inspekcija) — vdai.lrv.lt', linkLabel: 'vdai.lrv.lt', linkHref: vdaiUrl },
          { type: 'p', text: 'Les résidents européens peuvent également saisir leur autorité nationale (CNIL en France, BfDI en Allemagne, ICO au Royaume-Uni).' },
        ],
      },
      {
        heading: '9. Modifications de la présente politique',
        blocks: [
          { type: 'p', text: 'Cette politique évolue avec nos pratiques. La date figurant en tête de page indique la dernière révision. Toute modification substantielle est annoncée sur LinkedIn et notifiée par courrier électronique à nos clients référencés.' },
        ],
      },
    ],
  },
}

function RenderBlock({ block, idx }: { block: Block; idx: number }) {
  if (block.type === 'h3') return (
    <h3 key={idx} className="font-display font-semibold text-[0.97rem] text-body/85
                              tracking-[-0.01em] mt-6 mb-2.5">
      {block.text}
    </h3>
  )
  if (block.type === 'p') return (
    <p key={idx} className="text-[0.925rem] leading-[1.85] mb-3.5"
       style={{ color: '#4A5568' }}>
      {block.linkLabel
        ? (() => {
            const [before, after] = block.text.split(block.linkLabel!)
            return <>{before}<Link href={block.linkHref!}
              {...(block.linkHref!.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="font-medium underline underline-offset-2 transition-colors duration-200"
              style={{ color: '#6C5CE7' }}>{block.linkLabel}</Link>{after}</>
          })()
        : block.text}
    </p>
  )
  if (block.type === 'ul') return (
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
  return null
}

export default function LegalPage() {
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
                {sec.blocks.map((block, i) => (
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
