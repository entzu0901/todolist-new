// 該文件用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import news from '../pages/news.vue'
import message from '../pages/message.vue'
import Detail from '../pages/Detail.vue'
// 創建並暴露一個路由器
const router = new VueRouter({
    mode:history,
    routes:[
        {
            name:'about',
            path:'/about',
            component:About,
            meta:{title:'關於'}
        },
        {
            name:'page',
            path:'/home',
            component:Home,
            meta:{title:'主頁'},
            children:[
            {
                name:'hot',
                path:'news',
                component:news,
                meta:{isAuth:true,title:'新聞'},
                // 獨享路由守衛
                beforeEnter: (to, from, next) => {
                    console.log(to,from)
                        if(to.meta.isAuth){ //判斷是否需要權限
                            if(localStorage.getItem('school')==='blibli'){
                                document.title=to.meta.title||'首頁'
                                next()
                            }else{
                                alert('學校名不對,無權限查看')
                            }
                        }else{
                            document.title=to.meta.title||'首頁'
                            next()
                        }
                }
            },
            {
                name:'love',
                path:'message',
                component:message,
                meta:{isAuth:true,title:'消息'},
                children:[
                    {
                        name:'detail',
                        path:'Detail/:id/:title',
                        component:Detail,
                        meta:{title:'詳情'},
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
// router.beforeEach((to,from,next)=>{
//     console.log(to,from)
//     if(to.meta.isAuth){ //判斷是否需要權限
//         if(localStorage.getItem('school')==='blibli'){
//             document.title=to.meta.title||'首頁'
//             next()
//         }else{
//             alert('學校名不對,無權限查看')
//         }
//     }else{
//         document.title=to.meta.title||'首頁'
//         next()
//     }
// })
// 全局後置路由守衛-初始化的時候被調用,每次路由切換之後被調用
router.afterEach((to,from)=>{
    console.log('後置路由守衛',to,from)
    document.title=to.meta.title||'首頁'
})
export default router