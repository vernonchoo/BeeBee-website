import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/Index.vue'),
      },
      {
        path: 'routes',
        name: 'routes',
        component: () => import('@/pages/Routes.vue'),
      },
      {
        path: 'routes/:id',
        name: 'route-detail',
        component: () => import('@/pages/RouteDetail.vue'),
      },
      {
        path: 'schedule',
        name: 'schedule',
        component: () => import('@/pages/Schedule.vue'),
      },
      {
        path: 'promos',
        name: 'promos',
        component: () => import('@/pages/Promos.vue'),
      },
      {
        path: 'promos/:id',
        name: 'promo-detail',
        component: () => import('@/pages/PromoDetail.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/pages/Search.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/pages/About.vue'),
      },
      {
        path: 'reviews',
        name: 'reviews',
        component: () => import('@/pages/Reviews.vue'),
      },
      {
        path: 'reviews/:id',
        name: 'review-detail',
        component: () => import('@/pages/ReviewDetail.vue'),
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/pages/FAQ.vue'),
      },
      {
        path: 'for-agencies',
        name: 'for-agencies',
        component: () => import('@/pages/ForAgencies.vue'),
      },
      {
        path: 'for-tourists',
        name: 'for-tourists',
        component: () => import('@/pages/ForTourists.vue'),
      },
      {
        path: 'cooperation',
        name: 'cooperation',
        component: () => import('@/pages/Cooperation.vue'),
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/pages/Blog.vue'),
      },
      {
        path: 'blog/reports',
        name: 'blog-reports',
        component: () => import('@/pages/BlogReports.vue'),
      },
      {
        path: 'blog/articles',
        name: 'blog-articles',
        component: () => import('@/pages/BlogArticles.vue'),
      },
      {
        path: 'blog/route-info',
        name: 'blog-route-info',
        component: () => import('@/pages/BlogRouteInfo.vue'),
      },
      {
        path: 'blog/culture-history',
        name: 'blog-culture-history',
        component: () => import('@/pages/BlogCultureHistory.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue'),
      },
    ],
  },
]
