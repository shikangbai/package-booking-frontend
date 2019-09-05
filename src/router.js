import Vue from 'vue'
import Router from 'vue-router'
import Hello from './components/main/HelloWorld.vue'
import Warehouse from './components/main/Warehouse.vue'
import AppointmentHouse from './components/main/AppointmentHouse.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'hello',
    component: Hello
  },{
    path: '/warehouse',
    name: 'Warehouse',
    component: Warehouse
  },{
    path: '/appointmentHouse',
    name: 'appointmentHouse',
    component: AppointmentHouse
  }]
})
