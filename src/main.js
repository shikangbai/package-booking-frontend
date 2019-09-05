import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antDesignVue from 'ant-design-vue'

import http from './utils/http'
import data from './data/data'

import 'ant-design-vue/dist/antd.css'

window.http = http
window.data = data
Vue.config.productionTip = false
Vue.use(antDesignVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
