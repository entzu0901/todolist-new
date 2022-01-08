
<template>
<!-- 組件的結構 -->
    <div class="school">
        <h2>學校名稱:{{schoolName}}</h2>
        <h2>學校地址:{{address}}</h2>
        <button @click="sendSchoolName">把學校名給app</button>
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
        props:['getSchoolName'],
        methods: {
           sendSchoolName(){
               this.getSchoolName(this.schoolName)
           }
        },
    }
</script>
<style>
/* 組件的樣式 */
    .school{
        background-color: aquamarine;
        padding: 5px;
    }
</style>