<template>
    <div class="container">
        <search></search>
        <list></list>
    </div>
</template>

<script>
import './assets/css/bootstrap.css'
import search from './components/search.vue'
import list from './components/list.vue'
export default {
  name:'app',
  components:{search,list}
}
</script>

<style>
  
</style>