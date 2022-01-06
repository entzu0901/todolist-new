<template>
  <ul class="todo-main">
     <item v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
  </ul>
</template>

<script>
import item from './item.vue'
export default {
    name:'list',
    components:{
        item
    },
    data() {
        return {
            todos:[
                {id:'001',title:'打code',done:true},
                {id:'002',title:'看小說',done:false},
                {id:'003',title:'學習vue全家桶',done:true}
            ]      
        }
    },
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