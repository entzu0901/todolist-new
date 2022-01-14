<template>
     <h2>我是Home的內容</h2>
</template>

<script>
export default {
     name:'home',
     // beforeDestroy(){
     //        console.log('home組件即將被銷毀了')
     //    },
     mounted(){
          console.log('home組件掛載完畢了',this)
     }
}
</script>

<style>

</style>