import {login} from '../../api/login';
import Cookies from 'js-cookie';
const user = {
    state:{
        user: '',
        status: '',
        email: '',
        code: '',
        uid: undefined,
        auth_type: '',
        token: Cookies.get('Admin-Token'),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
        articlePlatform: []
        }
    },
    mutations:{
        SET_AUTH_TYPE:(state,type)=>{
            state.auth_type = type;
        },
        SET_CODE: (state, code) => {
            state.code = code;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_UID: (state, uid) => {
            state.uid = uid;
        },
        SET_USERNAME: (state, USERNAME) => {
            state.USERNAME = USERNAME;
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction;
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
         LOGIN_SUCCESS: () => {
            console.log('login success')
        },
        LOGOUT_USER: state => {
            state.user = '';
        }
    },
    actions:{
       login({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                let data = response.data;
                Cookies.set('Admin-Token',data.token);
                commit('SET_TOKEN', data.token);
                commit('SET_NAME', data.name);
                resolve();
                }).catch(error => {
                reject(error);
                });
            });
        },
            
    }
};
export default user;

