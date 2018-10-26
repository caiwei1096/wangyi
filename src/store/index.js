import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import reduxLoggoer from "redux-logger"//打印状态
import reduxThunk from "redux-thunk"//处理异步
import reduxPromise from "redux-Promise"//可以返回Promise对象
let store = createStore(reducer,applyMiddleware(reduxLoggoer,reduxThunk,reduxPromise))
window._store=store; //主要为了方便调试

export default store