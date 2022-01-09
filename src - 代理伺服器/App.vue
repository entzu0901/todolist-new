<template>
  <div>
    <button @click="getStudent">獲取學生訊息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'app',
  methods:{
    getStudent(){
      axios.get('http://localhost:8080/').then(
        Response=>{
          console.log('請求成功了',Response.data)
        },
        Error=>{
          console.log('請求失敗了',error.message)
        })
    }
  }
}
</script>

<style>

</style>