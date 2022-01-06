<template>
  <div>
      <student sname="張五" sex="男" :age="20"/>
  </div>
</template>

<script>
import Student from './components/student.vue'
export default {
  name:'App',
  components:{
    Student
  },
}
</script>

<style>

</style>