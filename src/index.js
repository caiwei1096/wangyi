import React from 'react';
import ReactDOM from 'react-dom'
import Home from './container/Home/Home'
import Cart from './container/Cart/Cart'
import Class from './container/Class/Class'
import Goods from './container/Goods/Goods'
import Profile from './container/Profile/Login'
import App from './container/App'
import ProfileDetail from './container/Profile/Profile'
import ProfileReg from './container/Profile/Reg'
import store from './store/index'
import {Provider} from 'react-redux'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

ReactDOM.render(
    <Router>
    <Provider store={store}>
        <App>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/class" component={Class}/>
            <Route path="/goods" component={Goods}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/profiledetail" component={ProfileDetail}/>
            <Route path='/profilereg' component={ProfileReg}></Route>
        </App>
    </Provider>

</Router>, window.root
)