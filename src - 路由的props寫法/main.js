import Vue from 'vue'
// 引入app組件 他是所有組件的父組件
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter)
// 引入store


// 創建vue
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
