import type { RouteListQuery } from '@/types/route'

/**
 * 将查询参数对象转换为 URL 查询字符串
 */
export function stringifyQuery(params: Record<string, any>): string {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return

    if (Array.isArray(value)) {
      value.forEach((v) => searchParams.append(key, String(v)))
    } else {
      searchParams.set(key, String(value))
    }
  })

  return searchParams.toString()
}

/**
 * 将 URL 查询字符串转换为对象
 */
export function parseQuery(search: string): RouteListQuery {
  const searchParams = new URLSearchParams(search)
  const params: any = {}

  searchParams.forEach((value, key) => {
    if (key === 'city' || key === 'theme') {
      if (!params[key]) params[key] = []
      params[key].push(value)
    } else if (key === 'ageMin' || key === 'ageMax' || key === 'page' || key === 'pageSize') {
      params[key] = Number(value)
    } else {
      params[key] = value
    }
  })

  return params
}

/**
 * 更新 URL 查询参数
 */
export function updateQuery(router: any, query: Record<string, any>) {
  router.push({
    query: {
      ...router.currentRoute.value.query,
      ...query,
    },
  })
}

/**
 * 分享链接
 */
export function shareUrl(url: string, title?: string) {
  if (navigator.share) {
    return navigator.share({
      title,
      url,
    })
  } else {
    // 复制到剪贴板
    return navigator.clipboard.writeText(url)
  }
}

/**
 * 分享到 LINE
 */
export function shareToLine(url: string, text?: string) {
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
  if (text) {
    return `${lineUrl}&text=${encodeURIComponent(text)}`
  }
  return lineUrl
}

