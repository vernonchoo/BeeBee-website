export type Locale = 'th-TH' | 'en' | 'zh-CN'

export interface ApiError {
  message: string
  code?: string
  status?: number
}

export interface PaginationParams {
  page?: number
  pageSize?: number
}

export interface SortOption {
  value: string
  label: string
}

export interface FilterOption {
  value: string
  label: string
  count?: number
}

