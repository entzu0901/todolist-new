<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通過父組件給組件傳遞函數類型的props實現,子給父傳遞事件 -->
    <school :getSchoolName="getSchoolName"></school>
    <!-- 通過父組件給組件綁定一個自訂義事件:子給父傳遞事件 -->
    <!-- <student @mimi="getStudentName"></student> -->
    
    <!-- 通過父組件給組件綁定一個自訂義事件:子給父傳遞事件(第二種寫法使用ref) -->
    <student ref="student"></student>
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
            msg:'你好阿!!'
          }
      },
    methods:{
      getSchoolName(name){
        console.log('app收到學校名',name)
      },
      getStudentName(name){
        console.log('app收到學生名',name)
      }
    },
    mounted(){
        this.$refs.student.$on('mimi',this.getStudentName)
    },
  }
</script>

<style scoped>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>
