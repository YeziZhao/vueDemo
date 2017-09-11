import Login from '../views/login/';
const  authRedirect = () => import('../views/login/authredirect');
const sendPWD = () => import('../views/login/sendpwd');
const reset = ()=> import('..//views/login/reset');
const Dashboard = ()=>import('../views/dashboard/index');
const Err404 = ()=> import('../views/error/404');
const Err401 = ()=> import('../views/error/401');

export const constantRouterMap = [
    {path:'/login',component:Login},//,hidden:true
    {path:'/',
    component:Dashboard,
    redirect:'/dashboard',
    name:'首页',
    hidden:true,
    children:[
        {path:'dashboard',component:Dashboard}
    ]}
];