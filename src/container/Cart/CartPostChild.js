import React from 'react';

export default class CartPostChild extends React.Component{
    render(){
        return <div className='cart_post_child'>
            <span><i className='iconfont icon-circle2yuanquan'></i>30天无忧退货</span>
            <span><i className='iconfont icon-circle2yuanquan'></i>48小时快速退款</span>
            <span><i className='iconfont icon-circle2yuanquan'></i>满88元免邮费</span>
        </div>
    }
}