<template>
     <h2>我是About的內容</h2>
</template>
<script>
    export default{
        name:'about',
        // beforeDestroy(){
        //     console.log('about組件即將被銷毀了')
        // },
        mounted(){
          console.log('about組件掛載完畢了',this)
        }
    }
</script>
