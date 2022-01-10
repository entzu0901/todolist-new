<template>
    <div class="container">
      <category title='美食'>
         <img slot="center" src='./assets/logo.png' alt="">
         <a slot="footer" href="https://github.com/entzu0901">更多github作品</a>
      </category>
      <category title='遊戲'>
         <ul slot="center">
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
         </ul>
         <div class="foot" slot="footer">
            <a  href="https://github.com/entzu0901">單機遊戲</a>
            <a  href="https://github.com/entzu0901">網路遊戲</a>
         </div>
      </category>
      <category title='電影'>
        <iframe slot="center" width="100%" src="https://www.youtube.com/embed/Hu1NqcDXvWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <template v-slot:footer> 
         <div class="foot">
            <a  href="https://github.com/entzu0901">熱門</a>
            <a  href="https://github.com/entzu0901">經典</a>
            <a  href="https://github.com/entzu0901">推薦</a>
         </div>
         <h4>歡迎前來觀影</h4>
        </template>
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
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  img{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>