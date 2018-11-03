import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import './index.less'
import {Route} from 'react-router-dom'
import Item from './Item';
import Recommend from './recommed';

export default class HomeSearch extends Component {
  render() {
      console.log(this.props.list)
    return (
      <div className="searchBox">
        <div className="header">
            <Link to="/" className="logo"></Link>
            <Link to="/search" className="input">
                <div className="text">
                    <i className="iconfont icon-sousuo"></i>
                    <span>搜索商品, 共16943款好物</span>
                 </div>
            </Link>
        </div>
        <div className="scroll">
            <div className="nav">
                <ul>
                    <NavLink to="/">
                        <span>推荐</span>
                    </NavLink>
                    {this.props.list.map((item,index)=>{
                        return <NavLink to={`/item/${item.id}`} key={index}>
                            <span>{item.title}</span>
                    </NavLink>
                    })}
                </ul>
            </div>
        </div>
        <div>
            {/* <Route path="/item/:id" component={Item}></Route> */}
        </div>
      </div>
    )
  }
}
