<template>
  <div>
      <student/>
      <hr>
      <school/>
  </div>
</template>

<script>
import School from './components/school.vue'
import Student from './components/student.vue'
export default {
  name:'App',
  components:{
    Student,
    School
  },
}
</script>

<style>

</style>