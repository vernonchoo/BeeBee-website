import { apiClient, ENABLE_MOCK } from '@/utils/api-client'
import type { PromoItem, PromoListQuery, PromoListResponse } from '@/types/promo'
import { mockPromos } from '@/mocks/promos'

export async function getPromoList(params?: PromoListQuery): Promise<PromoListResponse> {
  if (ENABLE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredPromos = [...mockPromos]

        if (params?.type) {
          filteredPromos = filteredPromos.filter((promo) => promo.type === params.type)
        }

        if (params?.city) {
          filteredPromos = filteredPromos.filter((promo) => promo.city === params.city)
        }

        const page = params?.page || 1
        const pageSize = params?.pageSize || 12
        const start = (page - 1) * pageSize
        const paginatedPromos = filteredPromos.slice(start, start + pageSize)

        resolve({
          items: paginatedPromos,
          total: filteredPromos.length,
          page,
          pageSize,
        })
      }, 300)
    })
  }

  return apiClient.get('/api/v1/promos', { params })
}

export async function getPromoDetail(id: string): Promise<PromoItem> {
  if (ENABLE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const promo = mockPromos.find((p) => p.id === id)
        if (promo) {
          resolve(promo)
        } else {
          reject(new Error('Promo not found'))
        }
      }, 300)
    })
  }

  return apiClient.get(`/api/v1/promos/${id}`)
}

