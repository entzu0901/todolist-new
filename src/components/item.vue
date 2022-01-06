<template>
    <div>  
      <li>
          <label>
              <input type="checkbox" :checked="todo.done" @click="handle(todo.id)">
              <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" style="display:none">刪除</button>
      </li>
    </div>
</template>

<script>
export default {
    name:'item',
    props:['todo','checkTodo'],
    methods:{
        handle(id){
            // 通知app組件將對應的todo對象中的done值取反
            this.checkTodo(id)
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

</style>