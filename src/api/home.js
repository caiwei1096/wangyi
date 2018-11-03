// 首页列表
import {get} from './index'
export function getCategory(){
    return get("/getCategory")
}
export function getSliders(){
    return get("/getSliders")
}
export function getList(){
    return get("/getList")
}
