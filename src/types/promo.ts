import type { City, LocalizedText } from './route'

export type PromoType = 'flight' | 'hotel' | 'bundle'

export interface PromoItem {
  id: string
  type: PromoType
  city?: City
  title: LocalizedText
  desc?: Partial<LocalizedText>
  priceTHB?: number
  originalPriceTHB?: number
  discountPercent?: number
  validUntil?: string
  coverImage?: string
  link?: string // 内部详情或外链
  badge?: string
}

export interface PromoListQuery {
  type?: PromoType
  city?: string
  page?: number
  pageSize?: number
}

export interface PromoListResponse {
  items: PromoItem[]
  total: number
  page: number
  pageSize: number
}

