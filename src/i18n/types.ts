import enCommon from '@/dictionaries/en/common.json'
import enHome   from '@/features/home/dictionaries/en.json'
import enLegal  from '@/features/legal/dictionaries/en.json'

const _sample = { ...enCommon, ...enHome, ...enLegal }

export type Dictionary = typeof _sample
export type Locale     = 'en' | 'fr'
