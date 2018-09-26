import Vue from 'vue';
import Router from 'vue-router';

import signup from '@/pages/signup/signup';
import login from '@/pages/login/login';
import forgetPassword from '@/pages/forgetPassword/forgetPassword';

import index from '@/pages/index/index';
import photos from '@/pages/photos/photos';
Vue.use(Router);

const routes = [{
  path: '/',
  meta: {
    title: '首页'
  },
  component: index
}, {
  path: '/photos',
  meta: {
    title: '我的相册'
  },
  component: photos
}, {
  path: '/signup',
  meta: {
    title: '注册'
  },
  component: signup
}, {
  path: '/login',
  meta: {
    title: '登录'
  },
  component: login
}, {
  path: '/forgetPassword',
  meta: {
    title: '忘记密码'
  },
  component: forgetPassword
}];

const router = new Router({
  routes
});

export default router;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  window.scrollTo(0, 0);

  const token = sessionStorage.getItem('token') || localStorage.getItem('token');
  if (token) {
    if (to.path === '/login' || to.path === '/signup') {
      window.document.title = '首页';
      next({ path: '/' });
    } else {
      next();
    };
  } else {
    next();
  }
});
