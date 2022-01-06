<template>
  <ul class="todo-main">
     <item></item>
     <item></item>
     <item></item>
  </ul>
</template>

<script>
import item from './item.vue'
export default {
    name:'list',
    components:{
        item
    }
}
</script>

<style scoped>
    .todo-main{
        margin-left: 0px;
        border:1px solid #ddd;
        border-radius: 2px;
        padding: 0px;
    }
    .todo-empty{
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>