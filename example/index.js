import Vue from 'vue'
import App from './App.vue'
import Copy from '../src'

Vue.use(Copy)

new Vue({
  el: '#app',
  render: h => h(App)
})
