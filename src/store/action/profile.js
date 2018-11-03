import * as Types from '../action-types'
import {login,reg} from '../../api/profile'//注意此处应该解构一下
export default {
    log(user) {
        return function (dispatch, getState) {
            login(user).then(val => {
                console.log(val, '登陆');//取不到val
                dispatch({type: Types.SET_LOGIN, val})

            })

        }
    },
    reg(user){
        return function (dispatch,getState) {
            debugger;
            reg(user).then(val=>{
                debugger;
                /*        let user = req.body;//得到请求体 body-parser中间件
                        users.push(user);*/
                console.log(user,'user');//user已经有数据了
                console.log(val,'注册');
                dispatch({type:Types.SET_LOGIN,val})
                debugger;
            })
            setTimeout(function () {
                dispatch({type:Types.SET_LOGIN,val:{success: ''}})
            },500)
        }
    }
}