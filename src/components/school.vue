<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h2>學校姓名:{{sname}}</h2>
        <h2>學校地址:{{address}}</h2>
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
// 引入一個混合
    export default{
        name:'school',
        data() {
            return {
               msg:"歡迎來到blibli",
               sname:'sew',
               address:'桃園市'
            }
        },
    }
</script>
<style scoped>
      .demo{
        background-color: aquamarine;
    }
</style>