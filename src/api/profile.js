import {post} from './index'
//登陆
export function login(user) {
    return post('/login',user)
}
//注册
export  function reg(user) {
    return post('/reg',user)
}