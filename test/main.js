// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Element from 'element-ui';
import Creek from '../lib/index';
import '../lib/theme-chalk/index.css';

// Vue.use(Element);
console.log(Creek);
Vue.use(Creek);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
