import type { Metadata }      from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { I18nProvider }         from '@/i18n/Provider'
import { siteHome, siteLocaleFr, siteOgImage, siteOrgId, siteLogo, linkedinUrl } from '@/config/site'
import './globals.css'

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets:  ['latin'],
  variable: '--font-space-grotesk',
  display:  'swap',
  weight:   ['500', '600', '700'],
})

export const metadata: Metadata = {
  title:       'Talent AI Hunting — AI-native recruitment agency | 5% success-fee, behavioral-tested, video-validated',
  description: 'Hire tech talent without the bad-hire risk. Behavioral testing + structured scorecard funnel + live AI video validation. 5% success-fee on year-1 salary, no retainer. EU AI Act compliant. 1000+ candidates evaluated.',
  keywords:    ['AI recruitment agency', 'AI-native hiring', 'behavioral interview', 'AI video validation', 'scorecard recruitment', 'success-fee recruitment', 'EU AI Act compliant recruitment', 'no retainer agency', 'anti fake CV', 'tech hiring agency'],
  robots:      { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 } },
  alternates:  {
    canonical: siteHome,
    languages: {
      'en':        siteHome,
      'fr':        siteLocaleFr,
      'x-default': siteHome,
    },
  },
  openGraph: {
    type:        'website',
    title:       'AI-native recruitment agency for tech hiring',
    description: '5% success-fee. Behavioral-tested candidates. EU AI Act compliant. Hedera-backed.',
    url:         siteHome,
    images:      [{ url: siteOgImage }],
    locale:      'en_US',
    alternateLocale: ['fr_FR'],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AI-native recruitment agency for tech hiring',
    description: '5% success-fee. Behavioral-tested. EU AI Act compliant.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': siteOrgId,
      name: 'Talent AI Labs',
      legalName: 'Talent AI Labs UAB',
      url: siteHome,
      logo: siteLogo,
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', addressCountry: 'LT', addressLocality: 'Vilnius' },
      vatID: 'LT307572423',
      sameAs: [linkedinUrl],
    },
    {
      '@type': 'ProfessionalService',
      name: 'AI-native recruitment agency',
      provider: { '@id': siteOrgId },
      areaServed: ['EU', 'UK', 'US', 'Canada', 'Worldwide remote'],
      serviceType: 'Technical recruitment with AI video validation',
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          description: '5% of placed candidate annual gross salary, success-fee only',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is Talent AI Hunting different from a traditional recruitment agency?',
          acceptedAnswer: { '@type': 'Answer', text: 'We charge 5% success-fee on year-1 salary, paid only after the candidate starts. No retainer. No setup fee. No exclusivity. Every candidate is screened by our live AI video validation that verifies identity and skills, preventing fake CVs and impersonation. Manual agencies typically charge 20-30% success-fee plus setup and hidden charges, totalling €18-25K on an €80K hire.' },
        },
        {
          '@type': 'Question',
          name: 'What is AI video validation and why does it matter?',
          acceptedAnswer: { '@type': 'Answer', text: 'AI video validation is a live verification system that combines identity check with real-time skill testing during a video interview. It addresses the broader pattern of fake CVs and identity fraud in remote tech hiring, which traditional CV review and phone screens cannot detect.' },
        },
        {
          '@type': 'Question',
          name: 'Are you EU AI Act compliant?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Recruitment is classified as a high-risk use case under Annex III of the EU AI Act. Our platform was designed compliance-first: human-in-the-loop scoring, bias monitoring, candidate transparency, full audit logs. We place across EU, UK, US, Canada and remote markets. EU AI Act compliance protects any client hiring into the EU. Enforcement begins August 2026 and we are 18 to 24 months ahead of the market.' },
        },
        {
          '@type': 'Question',
          name: 'Who are your typical clients?',
          acceptedAnswer: { '@type': 'Answer', text: 'Tech companies headquartered in the EU, UK, US, or Canada hiring senior engineers, AI/ML operators, CTOs, technical leads or specialist profiles where a bad hire is expensive. We work across most stacks and verticals (backend, infrastructure, data, AI, smart contracts, security). We do not take on hires below €60K salary and we do not do staffing-agency work.' },
        },
        {
          '@type': 'Question',
          name: 'What is the typical time-to-hire?',
          acceptedAnswer: { '@type': 'Answer', text: 'Target: 18 to 28 days from intake to signed offer, versus 42+ days industry baseline. Our pilot benchmark with Lightency closed in 18 days. AI sourcing on day 1, validated shortlist of 3 to 5 candidates within 7 days, hand-off to your hiring manager.' },
        },
        {
          '@type': 'Question',
          name: 'Do you take retainers or only success fees?',
          acceptedAnswer: { '@type': 'Answer', text: 'Success fee only. 5% of the placed candidate annual gross salary, invoiced after the candidate starts. No retainer. No upfront. No exclusivity. You pay zero if we don\'t deliver.' },
        },
        {
          '@type': 'Question',
          name: 'Are you live with paying clients already?',
          acceptedAnswer: { '@type': 'Answer', text: 'We launched the agency service in May 2026. We are running pilot placements with early partners. Our first confirmed placement, with Lightency, closed in 18 days. The underlying platform (sourcing, AI video validation, scoring) is used by six organizations including Kas Ventures, Dar Blockchain and Talent Master Center Senegal. We are pre-revenue by design, validating unit economics on controlled placements before scaling commercially. 5% success-fee on signed placements only.' },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
