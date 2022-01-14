<template>
    <div class="container">
      <count></count>
      <person></person>
    </div>
</template>

<script>
import count from './components/count.vue'
import Person from './components/person.vue'
export default {
  name:'app',
  components:{count, Person},
  mounted(){
    console.log('app',this)
  }
}
</script>

<style scoped>
  
</style>