import React from 'react';
import ReactDOM from 'react-dom'
import Home from './container/Home/Home'
import Cart from './container/Cart/Cart'
import Class from './container/Class/Class'
import Goods from './container/Goods/Goods'
<<<<<<< HEAD
import Profile from './container/Profile/Login'
=======
import Search from "./component/Search/Search"
import Profile from './container/Profile/Profile'
import Category from './container/Class/CategoryBody'
>>>>>>> test
import App from './container/App'
import ProfileDetail from './container/Profile/Profile'
import ProfileReg from './container/Profile/Reg'
import store from './store/index'
import {Provider} from 'react-redux'
<<<<<<< HEAD
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
=======
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Item from './container/Home/Item';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/class" component={Class}/>
                <Route path="/goods" component={Goods}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/item/:id" component={Item}/>
            </App>
        </Provider>
    </Router>,window.root);
>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a
