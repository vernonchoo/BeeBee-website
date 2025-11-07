import { describe, it, expect } from 'vitest'
import { formatCurrency, formatDate } from '@/utils/format'

describe('Format utilities', () => {
  it('formats currency correctly', () => {
    expect(formatCurrency(10000, 'th-TH')).toContain('10,000')
  })

  it('formats date correctly', () => {
    const date = '2024-12-25'
    const formatted = formatDate(date, 'th-TH')
    expect(formatted).toBeTruthy()
  })
})

