import { apiClient, ENABLE_MOCK } from '@/utils/api-client'
import type { RouteItem, RouteListQuery, RouteListResponse } from '@/types/route'
import { mockRoutes } from '@/mocks/routes'

export async function getRouteList(params?: RouteListQuery): Promise<RouteListResponse> {
  if (ENABLE_MOCK) {
    // Mock 逻辑
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredRoutes = [...mockRoutes]

        // 过滤国家（所有城市都是中国的，所以如果选择了中国，显示所有产品）
        if (params?.country && params.country.length > 0) {
          // 如果选择了中国，显示所有产品（因为所有城市都在中国）
          // 如果未来有其他国家的产品，可以在这里添加筛选逻辑
          if (!params.country.includes('china')) {
            filteredRoutes = []
          }
        }

        // 过滤城市
        if (params?.city && params.city.length > 0) {
          filteredRoutes = filteredRoutes.filter((route) => params.city?.includes(route.city))
        }

        // 过滤年龄
        if (params?.ageMin !== undefined) {
          filteredRoutes = filteredRoutes.filter((route) => route.ageMax >= params.ageMin!)
        }
        if (params?.ageMax !== undefined) {
          filteredRoutes = filteredRoutes.filter((route) => route.ageMin <= params.ageMax!)
        }

        // 过滤主题
        if (params?.theme && params.theme.length > 0) {
          filteredRoutes = filteredRoutes.filter((route) =>
            route.themes.some((t) => params.theme?.includes(t))
          )
        }

        // 排序
        if (params?.sort) {
          switch (params.sort) {
            case 'price_asc':
              filteredRoutes.sort((a, b) => a.priceTHB - b.priceTHB)
              break
            case 'price_desc':
              filteredRoutes.sort((a, b) => b.priceTHB - a.priceTHB)
              break
            case 'duration_asc':
              filteredRoutes.sort((a, b) => a.durationDays - b.durationDays)
              break
            case 'duration_desc':
              filteredRoutes.sort((a, b) => b.durationDays - a.durationDays)
              break
            case 'newest':
              // 按 ID 降序
              filteredRoutes.sort((a, b) => b.id.localeCompare(a.id))
              break
            default:
              // popular - 默认排序
              break
          }
        }

        const page = params?.page || 1
        const pageSize = params?.pageSize || 12
        const start = (page - 1) * pageSize
        const paginatedRoutes = filteredRoutes.slice(start, start + pageSize)

        resolve({
          items: paginatedRoutes,
          total: filteredRoutes.length,
          page,
          pageSize,
        })
      }, 300)
    })
  }

  return apiClient.get('/api/v1/routes', { params })
}

export async function getRouteDetail(id: string): Promise<RouteItem> {
  if (ENABLE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const route = mockRoutes.find((r) => r.id === id)
        if (route) {
          resolve(route)
        } else {
          reject(new Error('Route not found'))
        }
      }, 300)
    })
  }

  return apiClient.get(`/api/v1/routes/${id}`)
}
