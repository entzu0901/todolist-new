<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">點我輸出上方dom元素</button>
      <student></student>
  </div>
</template>

<script>
import Student from './components/student.vue'
export default {
  name:'app',
  components:{
    Student
  },
  data() {
    return {
      msg:'歡迎使用blibli'  
    }
  },
  methods:{
    showDom(){
      console.log(this.$refs.title) //獲取真實dom元素
    }
  }
}
</script>

<style>

</style>