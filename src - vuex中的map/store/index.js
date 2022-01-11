import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 該文件用於創建vuex中最為核心的store
const actions={
    // 用於響應組件裡的動作
    jia(miniStore,value){
        console.log('action中的jia被調用了')
        miniStore.commit('JIA',value)
    },
    jian(miniStore,value){
        console.log('action中的jian被調用了')
        miniStore.commit('JIAN',value)
    }

}
const mutations={
    // 用於操作數據(state)
    JIA(state,value){
        state.sum+=value
    },
    JIAN(state,value){
        state.sum-=value
    }
}
const state={
    // 用於存儲數據
    sum:9,
    school:'blibli',
    subject:'前端'
}
// 準備getters用於將state中的數據進行加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}
// 創建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

