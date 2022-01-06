<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h2>學生姓名:{{sname}}</h2>
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
               sname:'blibli',
               sex:'男'
            }
        },
    }
</script>
<style scoped>
    /* 組件的樣式 */
    .demo{
        background-color: orange;
    }
</style>
