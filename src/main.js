import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import commonJs from './assets/js/common'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false;
Vue.prototype.$commonJs = commonJs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
