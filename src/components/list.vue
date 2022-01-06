<template>
  <ul class="todo-main">
     <item v-for="todoObj in todos" 
     :key="todoObj.id" 
     :todo="todoObj" 
     :checkTodo="checkTodo"
     />
  </ul>
</template>

<script>
import item from './item.vue'
export default {
    name:'list',
    components:{
        item
    },
    props:['todos','checkTodo']
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