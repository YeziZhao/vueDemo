import Mock from 'mockjs';
import LoginAPI from './login';
import ServiceData from './ServiceData';

Mock.mock(/\/login\/login/,'post',LoginAPI.login);
Mock.mock(/\/servicedata/,'get',ServiceData.list);