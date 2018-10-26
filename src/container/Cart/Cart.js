import React, { Component } from 'react'
import './index.less';
import CartHeader from './CartHeader';
import CartPost from './CartPost';

export default class Cart extends Component {
  render() {
    return <div>
      <CartHeader/>
      <CartPost/>
    </div>
  }
}
