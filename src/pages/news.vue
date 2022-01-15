<template>
 <div>
   <ul>
     <li :style="{opacity}">歡迎學習vue</li>
        <li>
          news001 <input type="text"> 
        </li>
        <li>
          news002 <input type="text"> 
        </li>
        <li>
          news003 <input type="text"> 
        </li>
   </ul>
 </div>
</template>

<script>
export default {
    name:'news',
    // beforeDestroy(){
    //   console.log('news組件即將被銷毀了')
    //   clearInterval(this.timer)
    // },
    data() {
      return {
        opacity:1
      }
    },
    // mounted(){
    //   this.timer=setInterval(()=>{
    //     this.opacity-=0.01
    //     if(this.opacity<=0)this.opacity=1
    //   },16)
    // },
    activated(){
      console.log('news組件被激活了')
      this.timer=setInterval(()=>{
          console.log('#')
          this.opacity-=0.01
          if(this.opacity<=0)this.opacity=1
        },16)
    },
    deactivated(){
      console.log('news組件被失活了')
       clearInterval(this.timer)
    }
}
</script>

<style>

</style>