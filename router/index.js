import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('~/views/Home'),
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('~/views/Login'),
  },
  {
    name: 'community',
    path: '/community',
    component: () => import('~/views/CommunityMain'),
  },
  {
    name: 'HomeTraining',
    path: '/HomeFit',
    component: () => import('~/views/HomeFit'),
  },
  {
    name: 'HomeTraining',
    path: '/HomeFit/d',
    component: () => import('~/views/HomeFit'),
  },
  {
    name: 'HomeTrainingDetail',
    path: '/HomeFit/:id',
    component: () => import('~/views/HometrainingDetail'),
  },
  {
    name: 'MyHomeStore',
    path: '/store',
    component: () => import('~/views/HometrainingStore'),
  },
  {
    name: 'MyHomeStore',
    path: '/cart',
    component: () => import('~/views/Cart'),
  },
  {
    name: 'HometrainingSubscribe',
    path: '/subscribe',
    component: () => import('~/views/HometrainingSubscribe'),
  },
  {
    name: 'HometrainingReservation',
    path: '/reservation',
    component: () => import('~/views/HometrainingRes'),
    props: true,
  },
  {
    name: 'mypage',
    path: '/mypage',
    component: () => import('~/views/Mypage'),
  },
  {
    name: 'Subscription',
    path: '/subscription',
    component: () => import('~/views/MyScriptions'),
  },
  {
    name: 'SubscriptionInfo',
    path: '/subscription/info',
    component: () => import('~/views/MyScriptionsInfo'),
  },
  {
    name: 'SubscriptionInfo',
    path: '/video',
    component: () => import('~/views/video'),
  },
];

export default new VueRouter({
  // https://router.vuejs.org/kr/guide/essentials/history-mode.html

  routes,
});
