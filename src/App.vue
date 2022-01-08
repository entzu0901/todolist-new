<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <school></school>
    <student></student>
  </div>
</template>

<script>
  import student from './components/student.vue'
  import School from './components/school.vue'

  export default {
    name:'App',
    components:{
      student,School
    },
    data() {
        return {
            msg:'你好阿!!',
          }
      },
    methods:{
     
    },
  
  }
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>
