
<template>
<!-- 組件的結構 -->
    <div class="school">
        <h2>學校名稱:{{schoolName}}</h2>
        <h2>學校地址:{{address}}</h2>
    </div>
</template>
<script>
// 組件交互相關的代碼
    import pubsub from 'pubsub-js'
    export default{
        name:'school',
        data() {
            return {
                schoolName:'BLIBLI',
                address:'桃園市'
            }
        },
        mounted(){
          this.pubId= pubsub.subscribe('hello',(msgName,data)=>{
               console.log('有人發布了hello消息,hello消息的回調執行了',data)
           })
        },
        beforeDestroy(){
            pubsub.unsubscribe(this.pubId)
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