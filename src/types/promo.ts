import type { City, LocalizedText } from './route'

export type PromoType = 'flight' | 'hotel' | 'bundle' | 'ticket' | 'activity'

export interface PromoItem {
  id: string
  type: PromoType
  city?: City
  title: LocalizedText
  desc?: Partial<LocalizedText>
  // 详细内容
  content?: Partial<LocalizedText>
  // 使用方式说明
  usageInstructions?: Partial<LocalizedText>
  // 购买入口（可以是内部链接或外部链接）
  purchaseLink?: string
  purchaseLinkText?: Partial<LocalizedText>
  // 价格信息
  priceTHB?: number
  originalPriceTHB?: number
  discountPercent?: number
  // 有效期
  validFrom?: string
  validUntil?: string
  // 使用条件
  terms?: Partial<LocalizedText>
  // 适用线路（如果适用）
  applicableRoutes?: string[]
  // 图片
  coverImage?: string
  gallery?: string[]
  // 徽章
  badge?: string
  // 内部详情链接
  link?: string
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
