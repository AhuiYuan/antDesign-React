// 导入路由组件
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'

const routes = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/contact',
        component:Contact
    },
]

export default routes;