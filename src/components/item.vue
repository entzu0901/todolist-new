<template>
    <div>  
      <li>
          <label>
              <input type="checkbox" :checked="todo.done" @click="handle(todo.id)">
              <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="remove(todo.id)">刪除</button>
      </li>
    </div>
</template>

<script>
export default {
    name:'item',
    props:['todo'],
    methods:{
        // 勾選or取消勾選
        handle(id){
            // 通知app組件將對應的todo對象中的done值取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        // 刪除
        remove(id){
            if(confirm('確認刪除嗎')){
                // this.deleteTodo(id)
                this.$bus.$emit('deleteTodo',id)
            }
        }
    }
}
</script>

<style scoped>
    li{
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding:0 5px;
        border-bottom: 1px solid #ddd;
    }
    li label{
        float: left;
        cursor: pointer;
    }
    li label li input{
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top:-1px;
    }
    li button{
        float: right;
        display: none;
        margin-top: 3px;
    }
    li::before{
        content: initial;
    }
    li:last-child{
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
       display: block;
    }
</style>