<template>
  <div id="app">
    <div class="todo-container">
       <div class="todo-wrap">
         <my-header @addTodo="addTodo"></my-header>
         <list :todos="todos"></list>
         <my-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></my-footer>
       </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import myFooter from './components/myFooter.vue'
import myHeader from './components/myHeader.vue'
import list from './components/list.vue'

export default {
  name:'app',
  components:{
    myFooter,
    myHeader,
    list
  },
  data() {
      return {
        todos:JSON.parse(localStorage.getItem('todos'))|| []  
        }
    },
  methods:{
    // 添加一個todo
    addTodo(x){
      this.todos.unshift(x)
    },
    // 取消勾選
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id)todo.done=!todo.done
      })
    },
    // 刪除項目
    deleteTodo(_,id){
      this.todos=this.todos.filter(todo=>
           todo.id!== id
      )
    },
    // 全選或全不選
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
         todo.done=done
        })
      },
    // 當刪除全部任務時列表清空
    clearAllTodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    } 
  },
  watch:{
     todos:{
       deep:true,
       handler(newvalue){
         localStorage.setItem('todos',JSON.stringify(newvalue))
       }
     }
    },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo')
    pubsub.unsubscribe(this.pubId)
  
  }
}
</script>

<style>
   body{
     background: #fff;
   }
   .btn{
     display: inline-block;
     padding:4px 12px;
     margin-bottom: 0px;
     font-size: 14px;
     line-height: 20px;
     text-align: center;
     vertical-align: middle;
     cursor: pointer;
     box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 245, 0.32);
     border-radius: 4px;
   }
   .btn-danger{
     color:#fff;
     background-color: #da4f49;
     border:1px solid #bd362f;
   }
    .btn-edit{
     color:#fff;
     background-color: skyblue;
     border:1px solid rgba(103, 159, 180);
     margin-right: 5px;
   }
   .btn-danger:hover{
     color:#fff;
     background-color: #bd362f;
   }
   .btn:focus{
     outline: none;
   }
   .todo-container{
     width: 600px;
     margin:0 auto;
   }
   .todo-container .todo-wrap{
     padding:10px;
     border:1px solid #ddd;
     border-radius: 5px;
   }
</style>
