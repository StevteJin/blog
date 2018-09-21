import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index';
import signup from '@/pages/signup/signup';
import login from '@/pages/login/login';
import forgetPassword from '@/pages/forgetPassword/forgetPassword';

Vue.use(Router);

const routes = [{
  path: '/',
  meta: {
    title: '首页'
  },
  component: index
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
  const sUserAgent = window.navigator.userAgent.toLowerCase(); console.log(typeof (sUserAgent));
  const bIsIpad = sUserAgent.match(/ipad/i) === 'ipad';
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) === 'iphone os';
  const bIsMidp = sUserAgent.match(/midp/i) === 'midp';
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === 'rv:1.2.3.4';
  const bIsUc = sUserAgent.match(/ucweb/i) === 'ucweb';
  const bIsAndroid = sUserAgent.match(/android/i) === 'android';
  const bIsCE = sUserAgent.match(/windows ce/i) === 'windows ce';
  const bIsWM = sUserAgent.match(/windows mobile/i) === 'windows mobile';

  const token = sessionStorage.getItem('token') || localStorage.getItem('token');

  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) {
        next();
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }// 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    } else {
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
    }
  } else {
    // window.location.href = 'https://edu.smartqmx.com/#/';
    next();
  }
});
