// 該文件用於創建整個應用的路由器
import VueRouter from 'vue-router'
import About from '../pages/about.vue'
import Home from '../pages/home.vue'
import news from '../pages/news.vue'
import message from '../pages/message.vue'
// 創建並暴露一個路由器
export default  new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
            {
                path:'news',
                component:news
            },
            {
                path:'message',
                component:message
            }
        ]
     }
  ]
})