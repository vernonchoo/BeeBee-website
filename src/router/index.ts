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
        path: 'promos',
        name: 'promos',
        component: () => import('@/pages/Promos.vue'),
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
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/Contact.vue'),
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/pages/FAQ.vue'),
      },
    ],
  },
]

