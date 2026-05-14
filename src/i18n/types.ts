import enCommon from '@/dictionaries/en/common.json'
import enHome   from '@/features/home/dictionaries/en.json'

const _sample = { ...enCommon, ...enHome }

export type Dictionary = typeof _sample
export type Locale     = 'en' | 'fr'
