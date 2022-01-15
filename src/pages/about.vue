<template>
    <div> 
     <h2>我是About的內容</h2>
    </div>
</template>
<script>
    export default{
        name:'about',
        // beforeDestroy(){
        //     console.log('about組件即將被銷毀了')
        // },
        mounted(){
          console.log(this.$route)
        }
    }
</script>
