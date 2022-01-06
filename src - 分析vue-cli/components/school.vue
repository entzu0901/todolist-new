
<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h2>學校名稱:{{schoolName}}</h2>
        <h2>學校地址:{{address}}</h2>
        <button @click="show">點我提示學校名</button>
    </div>
</template>
<script>
// 組件交互相關的代碼
    export default{
        name:'school',
        data() {
            return {
                schoolName:'BLIBLI',
                address:'桃園市'
            }
        },
        methods: {
            show(){
                alert(this.schoolName)
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