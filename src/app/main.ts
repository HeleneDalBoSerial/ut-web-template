import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import vuetify from '../plugins/vuetify';
import WebTemplate from '../index';

Vue.use(Vuetify);
Vue.use(WebTemplate);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
