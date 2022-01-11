import Vue from 'vue'
// 引入app組件 他是所有組件的父組件
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 引入store
import store from './store'

// 創建vue
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus=this
  },
})
