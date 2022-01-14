import { nanoid } from 'nanoid'
import Vue from 'vue'
import Vuex from 'vuex'
import countOption from './count'
import personOption from './person'
Vue.use(Vuex)


// 該文件用於創建vuex中最為核心的store

    // 用於響應組件裡的動作
  



    // 用於存儲數據
    
   

// 準備getters用於將state中的數據進行加工

// 創建store
export default new Vuex.Store({
    modules:{
        countAbout:countOption,
        personAbout:personOption
    }
})

