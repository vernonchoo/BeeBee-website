export type Country = 'china'

export type City = 'shanghai' | 'guangzhou' | 'beijing' | 'zhuhai'

export type Theme = 'STEM' | 'Culture' | 'History' | 'Sports' | 'Arts' | 'AI' | 'Aerospace'

export interface LocalizedText {
  th: string
  en: string
  zh: string
}

export interface FlightInfo {
  airline: string
  flightNumber: string
  departure: {
    city: LocalizedText
    airport: string
    date: string // ISO yyyy-mm-dd
    time: string // HH:mm
  }
  arrival: {
    city: LocalizedText
    airport: string
    date: string // ISO yyyy-mm-dd
    time: string // HH:mm
  }
}

export interface RouteItem {
  id: string
  city: City
  departureCity?: LocalizedText // 出发地
  title: LocalizedText
  subtitle?: Partial<LocalizedText>
  durationDays: number
  ageMin: number
  ageMax: number
  themes: Theme[]
  nextStartDates: string[] // ISO yyyy-mm-dd
  priceTHB: number
  originalPriceTHB?: number // 原价（如有折扣）
  rating?: number
  seatsRemaining?: number
  coverImage: string
  gallery?: string[]
  highlights: string[]
  includes?: string[]
  excludes?: string[]
  itinerary?: DayItinerary[]
  faq?: FAQ[]
  flightInfo?: FlightInfo // 航班信息
}

export interface DayItinerary {
  day: number
  title: LocalizedText
  activities: Array<{
    time: string
    title: LocalizedText
    description: LocalizedText
    icon?: string
  }>
}

export interface FAQ {
  question: LocalizedText
  answer: LocalizedText
}

export interface RouteListQuery {
  country?: string[]
  city?: string[]
  ageMin?: number
  ageMax?: number
  dateFrom?: string
  dateTo?: string
  theme?: string[]
  sort?: 'popular' | 'newest' | 'price_asc' | 'price_desc' | 'duration_asc' | 'duration_desc'
  page?: number
  pageSize?: number
}

export interface RouteListResponse {
  items: RouteItem[]
  total: number
  page: number
  pageSize: number
}
