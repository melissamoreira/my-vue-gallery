import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import AuthHandler from './components/AuthHandler';

//Telling Vue about the Router

Vue.use(VueRouter);


//Defining the new VueRouter instance with the routes

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});

new Vue({
  store,
  router,
    //Passing the VueRouter instance into our Vue application

  render: h => h(App)
}).$mount('#app');
