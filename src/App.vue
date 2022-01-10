<template>
    <div class="container">
      <category title='美食'>
         <img src='./assets/logo.png' alt="">
      </category>
      <category title='遊戲'>
         <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
         </ul>
      </category>
      <category title='電影'>
        <iframe width="100%" src="https://www.youtube.com/embed/Hu1NqcDXvWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </category>
    </div>
</template>

<script>
import category from './components/category.vue'
export default {
  name:'app',
  components:{category},
  data() {
    return {
      foods:['牛角麵包','牛排','自助餐'],
      films:['月老','倒數計時','駭客任務'],
      games:['鬼武者','糖豆人','俄羅斯方塊']
    }
  },
}
</script>

<style scoped>
  .container{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
</style>