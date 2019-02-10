import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false


import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import { languages } from '../content/index.js'
import { defaultLocale } from '../content/index.js'
const messages = Object.assign(languages);

console.log(messages)
var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'ar',
  messages
})
const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '*',
      component: App,
      props: (route) => ({
          dir: route.query.lang == "ar" ? "rtl" : "ltr"
      })
  }]
});

new Vue({
  router, 
  i18n,
  render: h => h(App),
}).$mount('#app')
