import React from 'react';

export default class CartHeader extends React.Component{
    render(){
        let str ='';
        {this.props.curType ?  str = '编辑' : str = '完成'};
        return <div className='cart_head'>
            <span className='title'>购物车</span>
            <div className='right'>
                {this.props.curType ? <span className='coupon'>领券</span> : ''}
                <span className='edit' onClick={() => {this.props.changeType(this.props.curType)}}>{str}</span>
            </div>
        </div>
    }
}