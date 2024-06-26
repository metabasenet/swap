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
    component: () => import('../pages/Liquidity/V2liquidty.vue')
  },
  {
    path: '/tx/:hash',
    name: 'tx',
    component: () => import('../pages/TransDetails.vue'),
    props: true
  },
  {
    path: '/tokens',
    name: 'tokens',
    component: () => import('../pages/TokenTracker.vue')
  },
  {
    path: '/token/:address',
    name: 'token',
    component: () => import('../pages/TokenBinance.vue'),
    props: true
  },
  {
    path: '/address/:address?',
    name: 'address',
    component: () => import('../pages/AddressFrom.vue'),
    props: true
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () => import('../pages/Accounts.vue')
  },
  {
    path: '/tokentxns',
    name: 'tokentxns',
    component: () => import('../pages/TokenTransfers.vue')
  },
  {
    path: '/verifyContract/:address',
    name: 'verifyContract',
    component: () => import('../views/verifyContract/index.vue'),
    props: true
  },
  {
    path: '/verifyContractSolc/:address',
    name: 'verifyContractSolc',
    component: () => import('../views/verifyContractSolc/index.vue'),
    props: true
  },
  {
    path: '/bytecode/:address',
    name: 'bytecode',
    component: () => import('../views/bytecode/index.vue'),
    props: true
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