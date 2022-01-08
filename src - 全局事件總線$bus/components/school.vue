
<template>
<!-- 組件的結構 -->
    <div class="school">
        <h2>學校名稱:{{schoolName}}</h2>
        <h2>學校地址:{{address}}</h2>
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
        mounted(){
            // console.log('school',this)
            this.$bus.$on('hello',(data)=>{
                console.log('我是school組件,收到了數據',data)
            })
        },
        beforeDestroy(){
            this.$bus.$off('hello')
        }
    }
</script>
<style>
/* 組件的樣式 */
    .school{
        background-color: aquamarine;
        padding: 5px;
    }
</style>