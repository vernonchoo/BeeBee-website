/**
 * 本地存储工具
 */

const FAVORITES_KEY = 'beebee_favorites'
const RECENT_SEARCHES_KEY = 'beebee_recent_searches'

export interface Favorite {
  id: string
  type: 'route' | 'promo'
  timestamp: number
}

/**
 * 获取收藏列表
 */
export function getFavorites(): Favorite[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * 添加收藏
 */
export function addFavorite(id: string, type: 'route' | 'promo'): void {
  const favorites = getFavorites()
  const exists = favorites.find((f) => f.id === id && f.type === type)

  if (!exists) {
    favorites.unshift({
      id,
      type,
      timestamp: Date.now(),
    })
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }
}

/**
 * 移除收藏
 */
export function removeFavorite(id: string, type: 'route' | 'promo'): void {
  const favorites = getFavorites()
  const filtered = favorites.filter((f) => !(f.id === id && f.type === type))
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered))
}

/**
 * 检查是否已收藏
 */
export function isFavorite(id: string, type: 'route' | 'promo'): boolean {
  const favorites = getFavorites()
  return favorites.some((f) => f.id === id && f.type === type)
}

/**
 * 获取最近搜索
 */
export function getRecentSearches(): string[] {
  try {
    const data = localStorage.getItem(RECENT_SEARCHES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

/**
 * 添加最近搜索
 */
export function addRecentSearch(query: string): void {
  const searches = getRecentSearches()
  const filtered = searches.filter((s) => s !== query)
  filtered.unshift(query)

  // 最多保存 10 条
  const limited = filtered.slice(0, 10)
  localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(limited))
}

/**
 * 清空最近搜索
 */
export function clearRecentSearches(): void {
  localStorage.removeItem(RECENT_SEARCHES_KEY)
}

