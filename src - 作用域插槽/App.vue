<template>
    <div class="container">
      <category title='遊戲'>
        <template scope="mimi"> 
          <ul>
              <li v-for="(g,index) in mimi.games" :key="index">{{g}}</li>
          </ul>
        </template>
      </category>

      <category title='遊戲'>
        <template scope="mimi">
          <ol>
              <li style="color:red" v-for="(g,index) in mimi.games" :key="index">{{g}}</li>
          </ol>
        </template>
      </category> 

      <category title='遊戲'>
        <template scope="mimi">
          <h4 v-for="(g,index) in mimi.games" :key="index">{{g}}</h4>
        </template>
      </category>
    </div>
</template>

<script>
import category from './components/category.vue'
export default {
  name:'app',
  components:{category},

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