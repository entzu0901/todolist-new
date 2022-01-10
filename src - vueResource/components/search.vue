<template>
    <section class="card-header">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
            <button @click="getUser">search</button>
        </div>
    </section>
</template>

<script>
export default {
    name:'search',
    data() {
        return {
            keyword:''
        }
    },
    methods:{
        getUser(){
            this.$bus.$emit('userList',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            this.$http.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                response=>{console.log('請求成功了')
                this.$bus.$emit('userList',{isLoading:false,errMsg:'',users:response.data.items})},
                error=>{
                    console.log('請求失敗了',error.message)
                    this.$bus.$emit('userList',{isLoading:false,errMsg:error.message,users:[]})
                })  
            }
        }
    }
</script>

<style>

</style>