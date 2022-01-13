<template>
  <div>
      <h3 style="color:yellow">count組件的求和為{{sum}}</h3>
      <h1>人員列表</h1>
      <h3>列表中第一個人的名字是:{{firstPersonName}}</h3>
      <input type="text" placeholder="請輸入名字" v-model="name">
      <button @click="add">添加</button>
      <button @click="addWang">添加一個姓王的人</button>
      <button @click="addPersonServer">添加一個人</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
    name:'person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        add(){
            const personObj={id:nanoid(),name:this.name}
            this.name=''
            this.$store.commit('personAbout/ADD_PERSON',personObj)
        },
        addWang(){
            const personObj={id:nanoid(),name:this.name}
            this.$store.dispatch('personAbout/addPersonWang',personObj)
        },
        addPersonServer(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>

<style>

</style>