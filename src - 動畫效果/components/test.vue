<template>
    <div>
        <button @click="isShow=!isShow">顯示/隱藏</button>
        <transition appear>
            <h1 v-show="isShow">你好哦</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'test',
    data() {
        return {
            isShow:true,
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }
    .v-enter-active{
        animation: move 1s linear;
    }
    .v-leave-active{
        animation: move 1s reverse;
    }
    @keyframes move {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>