import React from "react";
import "./index.less";
// NavLink  Link 区别： NavLink 选中的当前的NavLink有class类名叫active；
import {NavLink} from "react-router-dom";
import "./index.less"
export default class Nav extends React.Component{
    render(){
        return <div className="nav-home">
                    <NavLink to={"/"} exact={true}>
                        <i className="iconfont icon-zhuye"></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to={"/Goods"} >
                        <i className="iconfont icon-hezi"></i>
                        <span>识物</span>
                    </NavLink>
                    <NavLink to={"/class"}>
                        <i className="iconfont icon-guizi"></i>
                        <span>分类</span>
                    </NavLink>
                    <NavLink to={"/cart"}>
                        <i className="iconfont icon-icon--"></i>
                        <span>购物车</span>
                    </NavLink>
                    <NavLink to={"/profile"}>
                        <i className="iconfont icon-geren10"></i>
                        <span>个人</span>
                    </NavLink>
                </div>
    }
}