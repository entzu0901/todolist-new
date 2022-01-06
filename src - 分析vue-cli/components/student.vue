<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h2>學生姓名:{{studentName}}</h2>
        <h2>學校年齡:{{age}}</h2>
        <button @click="show">點我提示學校名</button>
    </div>
</template>
<script>
// 組件交互相關的代碼
    export default{
        name:'student',
        data() {
            return {
                studentName:'ali',
                age:20
            }
        },
        methods: {
            show(){
                alert(this.studentName)
            }
        },
    }
</script>
<style>
/* 組件的樣式 */
    .demo{
        background-color: aquamarine;
    }
</style>