import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/homeDashboardTic'
  },
  {
    path: '/homeDashboardTic',
    name: 'HomeDashboardTic',
    component: () => import('@/views/tic/HomeDashboardTic.vue'),
    children:[
      {
        path:'CadastroVersaoErp',
        name:'cadastroVersaoErp',
        component:() => import('@/views/tic/dashboard/CadastroVersaoErp.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
