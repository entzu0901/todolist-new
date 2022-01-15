// 該文件用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import news from '../pages/news.vue'
import message from '../pages/message.vue'
import Detail from '../pages/Detail.vue'
// 創建並暴露一個路由器
const router = new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About
        },
        {
            name:'page',
            path:'/home',
            component:Home,
            children:[
            {
                name:'hot',
                path:'news',
                component:news,
            },
            {
                name:'love',
                path:'message',
                component:message,
                children:[
                    {
                        name:'detail',
                        path:'Detail/:id/:title',
                        component:Detail,
                        // props:true,
                        // props值為布林值,若為真會把該路由組件所有的params參數,以props形式傳給details組件
                        // 第三種寫法props為函數
                        props($route){
                            return {id:$route.params.id,title:$route.params.title}
                        }
                    }
                ]
            }
        ]
     }
  ]
})
// 全局前置路由守衛-初始化的時候被調用,每次路由切換之前被調用
router.beforeEach((to,from,next)=>{
    console.log(to,from)
    if(to.name==='hot'||to.name==='love'){
        if(localStorage.getItem('school')==='blibli'){
            next()
        }else{
            alert('學校名不對,無權限查看')
        }
    }else{
        next()
    }
})
export default router