import axios from 'axios';
import {Message} from 'element-ui';
import store from '../store';

const SERVICE = axios.create({
    baseURL:process.env.BASE_API,
    timeout:5000
});

SERVICE.interceptors.request.use(config=>{
    // if(store.getters.token){
    //     config.headers("X-Token") =store.getters.token;
    // }
    return config;
},error=>{
    Promise.reject(error);
});

SERVICE.interceptors.response.use(response =>{
    const CODE = response.data.status;
     switch (CODE){
        case 400:
        break;
        case 403: //logout
        break;
        default:
        return response;
    } 
},error=>{
    Message({
        message: error.message,
        type: 'error',
         duration: 5 * 1000
    });
    return Promise.reject(error);
});

export default SERVICE;
