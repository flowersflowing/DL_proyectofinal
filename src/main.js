import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebaseConfig';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(ElementUi);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  firebase,
  render: h => h(App)
}).$mount('#app')
