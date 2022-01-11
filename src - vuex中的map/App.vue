<template>
    <div class="container">
      <count></count>
    </div>
</template>

<script>
import count from './components/count.vue'
export default {
  name:'app',
  components:{count},
  mounted(){
    console.log('app',this)
  }
}
</script>

<style scoped>
  
</style>