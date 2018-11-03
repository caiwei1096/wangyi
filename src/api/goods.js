<<<<<<< HEAD
import {get}from './index'
export function getSliders() {
    return get('/getSliders')
}
export function getList(category,offset,limit){
    //category 代表课程的类型  offset页面已经加载多少条  limit 限制加载多少次
    return get(`/getList/`)
=======
import {get}from './index'
export function getSliders() {
    return get('/getSliders')
}
export function getList(category,offset,limit){
    //category 代表课程的类型  offset页面已经加载多少条  limit 限制加载多少次
    return get(`/getList/`)
>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a
}