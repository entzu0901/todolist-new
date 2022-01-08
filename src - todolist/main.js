import Vue from 'vue'
// 引入app組件 他是所有組件的父組件
import App from './App.vue'


// 創建vue
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
  },
})
