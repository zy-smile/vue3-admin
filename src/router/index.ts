import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/layout.vue'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/index/index.vue')
      }, {
        path: '/echarts',
        name: 'echarts',
        component: () => import('../views/echarts/echarts.vue')
      }, {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor/editor.vue')
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
