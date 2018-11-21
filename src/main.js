import Vue from 'vue';
import App from './App.vue';
import store from './store';

// Importing the vuex store in our Vue object

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
