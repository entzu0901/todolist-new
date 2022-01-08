<template>
<!-- 組件的結構 -->
    <div class="student">
        <h2>學生姓名:{{studentName}}</h2>
        <h2>學生年齡:{{age}}</h2>
        <button @click="sendStudentName">把學生名給school組件</button>
    </div>
</template>
<script>
// 組件交互相關的代碼
    export default{
        name:'student',
        data() {
            return {
                studentName:'ali',
                age:20,
            }
        },
        methods: {
          sendStudentName(){
              this.$bus.$emit('hello',this.studentName)
          }
        },
    }
</script>
<style>
/* 組件的樣式 */
    .student{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>