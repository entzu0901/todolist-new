<template>
<!-- 組件的結構 -->
    <div class="student">
        <h2>學生姓名:{{studentName}}</h2>
        <h2>學校年齡:{{age}}</h2>
        <h2>當前求和為:{{number}}</h2>
        <button @click="sendStudentName">把學生名給app</button>
        <button @click="unbind">解綁mimi事件</button>
        <button @click="dead">銷毀當前student組件的實例對象(vc)</button>
        <button @click="add">點我number++</button>
    </div>
</template>
<script>
// 組件交互相關的代碼
    export default{
        name:'student',
        data() {
            return {
                studentName:'ali',
                age:20,
                number:0
            }
        },
        methods: {
            sendStudentName(){
                // 觸發student組件實例身上的mimi事件
                this.$emit('mimi',this.studentName)
                // this.$emit('demo')
            },
            unbind(){
                this.$off('mimi') //解綁一個自定義事件
                // this.$off(['mimi','demo']) //解綁多個自定義事件
                // this.$off()//解綁所有自定義事件
            },
            dead(){
                this.$destroy()  //銷毀當前student組件的實例對象,銷毀後所有自定義事件都無效了
            },
            add(){
                this.number++
                console.log("add回調被調用了")
            }
        },
    }
</script>
<style>
/* 組件的樣式 */
    .student{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>