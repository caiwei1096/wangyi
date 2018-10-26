const HOST = 'http://localhost:3001';//域名+端口号
export function get(url) {
    //response 相应 是一个响应的对象 里面有状态吗 相应体
    //response.json 把相应体的数据返回出去
    //response=>response.json()
    return fetch(HOST + url).then(function (response) {
        return response.json()
    })
}
