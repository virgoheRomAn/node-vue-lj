
import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import store from './vuex/index';
import App from './App';
import ElementUI from 'element-ui';
import axios from './request/config';
import jquery from 'jquery';
import swiper from 'swiper/js/swiper.js';
import Global from 'assets/js/global';
import Plugins from 'assets/js/components';
import jBox from 'assets/plugins/jBox';

//引入全局样式
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/css/swiper.min.css';
import './assets/less/base.less';

Vue.prototype.$ = jquery;
Vue.prototype.$ajax = axios;
Vue.prototype.$swiper = swiper;
Vue.prototype.$G = Global;
Vue.prototype.$jBox = jBox;

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI);
// Vue.use(iView);
Vue.use(Plugins);


var vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

export default vue;
