import React from 'react';

export default class CartHeader extends React.Component{
    render(){
        return <div className='cart_head'>
            <span className='title'>购物车</span>
            <div className='right'>
                <span className='coupon'>领券</span>
                <span className='edit'>编辑</span>
            </div>
        </div>
    }
}