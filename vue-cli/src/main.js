import Vue from 'vue';
import App from './App.vue';
import AppServers from './components/AppServers';

Vue.config.productionTip = false;

Vue.component('AppServers', AppServers);

new Vue({
  render: h => h(App),
}).$mount('#app');
