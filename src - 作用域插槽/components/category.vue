<template>
  <div class="category">
      <h3>{{title}}分類</h3>  
      <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
    name:'category',
    props:['title'],
    data() {
        return {
             games:['鬼武者','糖豆人','俄羅斯方塊'],
        }
    },
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>