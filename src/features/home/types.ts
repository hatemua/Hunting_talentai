import type { Dictionary } from '@/i18n/types'

export interface FooterProps      { dict: Dictionary['footer']      }
export interface HeroProps        { dict: Dictionary['hero']        }
export interface ProblemProps     { dict: Dictionary['problem']     }
export interface HowItWorksProps  { dict: Dictionary['howItWorks']  }
export interface CompareProps     { dict: Dictionary['compare']     }
export interface SocialProofProps { dict: Dictionary['socialProof'] }
export interface PricingProps     { dict: Dictionary['pricing']     }
export interface FAQProps         { dict: Dictionary['faq']         }
export interface FinalCTAProps    { dict: Dictionary['cta']         }

export interface FAQRowProps {
  question:     string
  answer:       string
  index:        number
  total:        number
  defaultOpen?: boolean
}
