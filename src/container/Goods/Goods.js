import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
import GoodNav from './goodnav'
import GoodSwiper from './goodSwiper'
export default class Goods extends Component {
    render() {
      return <div>
          <GoodNav></GoodNav>
          <GoodSwiper></GoodSwiper>
      </div>
    }
}
