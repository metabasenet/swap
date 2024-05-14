import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [

  {
    path: '/',
    redirect: '/swap'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hideHeader: true,
      hideFooter: true,
    },
  },
  {
    path: '/swap',
    name: 'swap',
    component: () => import('../pages/swap/SwapMain.vue'),
    children: [
      {
        path: 'twap',
        name: 'twap',
        component: () => import('../pages/swap/Twapabout.vue'),
      },
      {
        path: 'limit',
        name: 'limit',
        component: () => import('../pages/swap/Limitabout.vue'),
      }
    ]
  },
  {
    path: '/liquidity',
    name: 'liquidity',
    component: () => import('../pages/Liquidity/liquidityMain.vue')
  }, {
    path: '/find',
    name: 'find',
    component: () => import('../pages/Liquidity/find.vue'),
    props: true
  },
  {
    path: '/v2add',
    name: 'v2add',
    component: () => import('../pages/Liquidity/V2liquidty.vue'),
    props:true
  },
  {
    path: '/linechart',
    name: 'linechart',
    component: () => import('../pages/lineChart/lineChart.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'notFound',
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
});

export default router