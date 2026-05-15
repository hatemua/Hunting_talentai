import type { Dictionary } from '@/i18n/types'

export type Locale = 'en' | 'fr'

export type ListItem = { text: string; bold?: string }
export type BlockP   = { type: string; text: string; linkLabel?: string; linkHref?: string }
export type BlockUL  = { type: string; items: ListItem[] }
export type Block    = BlockP | BlockUL

export type ImprintDict  = Dictionary['imprint']
export type TableRow     = ImprintDict['tables'][number]['rows'][number]
export type ProseSection = ImprintDict['prose'][number]
