<<<<<<< HEAD
const HOST = 'http://localhost:3001';//域名+端口号
export function get(url) {
    //response 相应 是一个响应的对象 里面有状态吗 相应体
    //response.json 把相应体的数据返回出去
    //response=>response.json()
    return fetch(HOST + url).then(function (response) {
        return response.json()
    })
=======

const HOST = 'http://localhost:3001';

export function get(url) {
    return fetch(HOST + url).then(response => response.json())
}

export function post(url,data) {
    return fetch(HOST + url,{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json' // 接收json格式的数据类型
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a
}
export function post(url,data) {
    console.log(data, 9999999);
    // response : 是一个响应的对象；里面有状态码；响应体；
    // response.json : 把响应体的数据返回出去；
    return fetch(HOST + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"// 接收json格式的项数据类型；
        },
        body: JSON.stringify(data)
    }).then(response => response.json())
}