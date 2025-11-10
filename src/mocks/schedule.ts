import type { RouteItem } from '@/types/route'
import { mockRoutes } from './routes'

export interface ScheduleItem {
  id: string
  routeId: string
  startDate: string // ISO yyyy-mm-dd
  endDate: string // ISO yyyy-mm-dd
  route: RouteItem
  seatsRemaining: number
  seatsTotal: number
}

// 从现有路线数据生成行程表数据
export function generateScheduleItems(): ScheduleItem[] {
  const scheduleItems: ScheduleItem[] = []

  mockRoutes.forEach((route) => {
    route.nextStartDates?.forEach((startDate) => {
      // 计算结束日期
      const start = new Date(startDate)
      const end = new Date(start)
      end.setDate(start.getDate() + route.durationDays - 1)

      scheduleItems.push({
        id: `${route.id}-${startDate}`,
        routeId: route.id,
        startDate,
        endDate: end.toISOString().split('T')[0],
        route,
        seatsRemaining: route.seatsRemaining || Math.floor(Math.random() * 20) + 5,
        seatsTotal: (route.seatsRemaining || 15) + Math.floor(Math.random() * 10) + 5,
      })
    })
  })

  // 按日期排序
  return scheduleItems.sort((a, b) => a.startDate.localeCompare(b.startDate))
}

export const mockScheduleItems = generateScheduleItems()
