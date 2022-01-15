<template>
  <div>
     <h2>我是Home的內容</h2>
     <div>
          <ul class="nav nav-tabs">
               <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
               </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
               </li>
          </ul>
          <!-- include內的名為組件名 -->
          <keep-alive :include="['news','message']"> 
                <router-view></router-view>
          </keep-alive>
         
     </div>
  </div>
</template>

<script>
export default {
     name:'home',
     // beforeDestroy(){
     //        console.log('home組件即將被銷毀了')
     //    },
     // mounted(){
     //      console.log('home組件掛載完畢了',this)
     // }
}
</script>

<style>

</style>