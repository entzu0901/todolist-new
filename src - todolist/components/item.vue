<template>
    <div>  
      <li>
          <label>
              <input type="checkbox" :checked="todo.done" @click="handle(todo.id)">
              <span v-show="!todo.isEdit">{{todo.title}}</span>
              <input type="text" v-show="todo.isEdit"  :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
          </label>
          <button class="btn btn-danger" @click="remove(todo.id)">刪除</button>
          <button  v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">編輯</button>
      </li>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
            if(confirm('確認刪除嗎?')){
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo',id)
                pubsub.publish('deleteTodo',id)
            }
        },
        // 編輯
        handleEdit(todo){
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit=true
            }else{
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })    
        },
        // 失去焦點回調
        handleBlur(todo,e){
            todo.isEdit=false
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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