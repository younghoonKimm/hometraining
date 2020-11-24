import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const leave = (to, from, next) => {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
  if (answer) {
    return next();
  } else {
    next(false);
  }
};

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
    path: '/main',
    component: () => import('~/views/HometrainingMain'),
  },
  {
    name: 'HomeTrainingDetail',
    path: '/main/:id',
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
