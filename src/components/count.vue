<template>
  <div>
      <h3>當前求和為{{sum}}</h3>
      <select v-model.number="number">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="plus">+</button>
      <button @click="decrement">-</button>
      <button @click="odd">當前為奇數再加</button>
      <button @click="wait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'count',
    data() {
        return {
            sum:0,
            number:1
        }
    },
    methods:{
        plus(){
            this.sum+=this.number
        },
        decrement(){
            this.sum-=this.number
        },
        odd(){
            if(this.sum%2){
                this.sum+=this.number
            }
        },
        wait(){
            setTimeout(()=>{
                this.sum+=this.number
            },500)
        }
    },
    mounted(){
        console.log('count',this)
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>