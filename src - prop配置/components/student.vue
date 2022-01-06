<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h2>學生姓名:{{sname}}</h2>
        <h2>學校年齡:{{myAge+1}}</h2>
        <button @click="changeAge">點我更改年齡</button>
        <h2>學生性別:{{sex}}</h2>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
// 組件交互相關的代碼
    export default{
        name:'student',
        data() {
            return {
               msg:"歡迎來到blibli",
               myAge:this.age
            }
        },
        methods:{
            changeAge(){
                this.myAge++
            }
        },
        props:['sname','sex','age']
    }
</script>
<style>
/* 組件的樣式 */
    .demo{
        background-color: aquamarine;
    }
</style>