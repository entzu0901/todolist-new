<template>
  <div>
      <h1>當前求和為{{sum}}</h1>
      <h3>當前求和放大十倍為{{bigSum}}</h3>
      <h3>我在{{school}}學習{{subject}}</h3>
      <h3 style="color:red">下方組件的總人數是:{{personList.length}}</h3>
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="plus(number)">+</button>
      <button @click="decrement(number)">-</button>
      <button @click="odd(number)">當前為奇數再加</button>
      <button @click="wait(number)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    name:'count',
    data() {
        return {
            number:1
        }
    },
    computed:{
        // sum(){
        //   return this.$store.state.sum
        // },
        // bigSum(){
        //   return this.$store.getters.bigSum
        // },
        // 對象寫法
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),
        // 數組寫法
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',['bigSum']),
        // school(){
        //   return this.$store.state.school
        // },
        // subject(){
        //   return this.$store.state.subject
        // }
    },
    methods:{
        // plus(){
        //    this.$store.commit('JIA',this.number)
        // },
        // decrement(){
        //    this.$store.commit('JIAN',this.number)
        // },
        // 借助mapMutation生成對應的方法,方法中會調用commit去聯繫mutations
        ...mapMutations('countAbout',{plus:'JIA',decrement:'JIAN'}),
        ...mapActions('countAbout',{odd:'jia',wait:'jia'}),
        // odd(){
        //     if(this.$store.state.sum%2){
        //         this.$store.dispatch('jia',this.number)
        //     }
        // },
        // wait(){
        //     setTimeout(()=>{
        //        this.$store.dispatch('jia',this.number)
        //     },500)
        // }
    },
    mounted(){
       const x=mapState({sum:'sum',school:'school',subject:'subject'})
       console.log(x)
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>