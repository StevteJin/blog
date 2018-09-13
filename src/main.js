// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'lib-flexible/flexible';
import { NavBar, Row, Col, Toast } from 'vant';
// 引入axios
import axios from './http';

Vue.prototype.axios = axios;

Vue.use(NavBar);
Vue.use(Row);
Vue.use(Col);
Vue.use(Toast);

Vue.config.productionTip = false;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
