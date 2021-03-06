export default{
    namespaced:true,
    actions:{
        jia(miniStore,value){
            console.log('action中的jia被調用了')
            miniStore.commit('JIA',value)
        },
        jian(miniStore,value){
            console.log('action中的jian被調用了')
            miniStore.commit('JIAN',value)
        }
    },
    mutations:{
        JIA(state,value){
            state.sum+=value
        },
        JIAN(state,value){
            state.sum-=value
        },
    },
    state:{
        sum:9,
        school:'blibli',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}