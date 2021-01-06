import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUi);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
