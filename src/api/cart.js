import {get,post} from './index';

// 获取轮播图数据
export function getCartList() {
    return get('/getList');
    // return get('/getCartList');
}

export function setNum(index) {
    return post('/setNum',index);
}

export function setChoose(index) {
    return post('/setChoose',index);
}

export function setDel(index) {
    return post('/setDel',index);
}

export function delData() {
    return post('/delData');
}
