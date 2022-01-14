<template>
    <div>
      <div class="row">
        <banner></banner>
      </div>
      
        <div class="row">
          <div class="col-xs-2 col-xs-offset-2">
            <div class="list-group">
              <!-- 借助router-link實現路由的切換 -->
              <router-link class="list-group-item" active-class="active" to="/about">About </router-link>
              <router-link class="list-group-item" active-class="active" to="/home">Home </router-link>
            </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 指定組件的呈現位置 -->
               <router-view></router-view>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import banner from './components/banner.vue'
export default {
  name:'app',
  components:{banner},

}
</script>

<style scoped>
  
</style>