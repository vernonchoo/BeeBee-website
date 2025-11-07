export type City = 'shanghai' | 'guangzhou' | 'beijing' | 'zhuhai'

export type Theme = 'STEM' | 'Culture' | 'History' | 'Sports' | 'Arts' | 'AI' | 'Aerospace'

export interface LocalizedText {
  th: string
  en: string
  zh: string
}

export interface RouteItem {
  id: string
  city: City
  title: LocalizedText
  subtitle?: Partial<LocalizedText>
  durationDays: number
  ageMin: number
  ageMax: number
  themes: Theme[]
  nextStartDates: string[] // ISO yyyy-mm-dd
  priceTHB: number
  rating?: number
  seatsRemaining?: number
  coverImage: string
  gallery?: string[]
  highlights: string[]
  includes?: string[]
  excludes?: string[]
  itinerary?: DayItinerary[]
  faq?: FAQ[]
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

