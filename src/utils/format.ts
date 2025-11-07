import type { Locale } from '@/types/common'

/**
 * 格式化货币
 */
export function formatCurrency(amount: number, locale: Locale = 'th-TH'): string {
  const localeMap: Record<Locale, string> = {
    'th-TH': 'th-TH',
    en: 'en-US',
    'zh-CN': 'zh-CN',
  }

  return new Intl.NumberFormat(localeMap[locale], {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * 格式化日期
 */
export function formatDate(date: string | Date, locale: Locale = 'th-TH'): string {
  const localeMap: Record<Locale, string> = {
    'th-TH': 'th-TH',
    en: 'en-US',
    'zh-CN': 'zh-CN',
  }

  const dateObj = typeof date === 'string' ? new Date(date) : date

  return new Intl.DateTimeFormat(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

/**
 * 格式化日期范围
 */
export function formatDateRange(
  startDate: string | Date,
  endDate: string | Date,
  locale: Locale = 'th-TH'
): string {
  return `${formatDate(startDate, locale)} - ${formatDate(endDate, locale)}`
}

/**
 * 计算倒计时
 */
export function getTimeRemaining(targetDate: string): {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
} {
  const now = new Date().getTime()
  const target = new Date(targetDate).getTime()
  const difference = target - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds, isExpired: false }
}

/**
 * 格式化年龄范围
 */
export function formatAgeRange(min: number, max: number): string {
  return `${min}-${max}`
}

