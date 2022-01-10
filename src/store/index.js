import Vue from 'Vue'
import Vuex from 'Vuex'
// 該文件用於創建vuex中最為核心的store
const actions={
    // 用於響應組件裡的動作
}
const mutations={
    // 用於操作數據(state)
}
const state={
    // 用於存儲數據
}
Vue.use(Vuex)
// 創建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

