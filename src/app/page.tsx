'use client'

import { useTranslation }  from 'react-i18next'
import type { Dictionary } from '@/i18n/types'
import { Navbar }          from '@/features/home/components/Navbar'
import { Hero }            from '@/features/home/components/Hero'
import { Problem }         from '@/features/home/components/Problem'
import { HowItWorks }      from '@/features/home/components/HowItWorks'
import { Compare }         from '@/features/home/components/Compare'
import { SocialProof }     from '@/features/home/components/SocialProof'
import { Pricing }         from '@/features/home/components/Pricing'
import { FAQ }             from '@/features/home/components/FAQ'
import { FinalCTA }        from '@/features/home/components/FinalCTA'
import { Footer }          from '@/features/home/components/Footer'

export default function Home() {
  const { i18n } = useTranslation()

  // Resolve the full resource bundle for the active language with EN fallback
  const dict = (
    i18n.getResourceBundle(i18n.language, 'translation') ??
    i18n.getResourceBundle('en',          'translation')
  ) as Dictionary

  return (
    <>
      <Navbar />
      <main>
        <Hero        dict={dict.hero}        />
        <Problem     dict={dict.problem}     />
        <HowItWorks  dict={dict.howItWorks}  />
        <Compare     dict={dict.compare}     />
        <SocialProof dict={dict.socialProof} />
        <Pricing     dict={dict.pricing}     />
        <FAQ         dict={dict.faq}         />
        <FinalCTA    dict={dict.cta}         />
      </main>
      <Footer dict={dict.footer} />
    </>
  )
}
