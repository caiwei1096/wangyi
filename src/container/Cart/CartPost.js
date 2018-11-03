import React from 'react';
import CartPostChild from "./CartPostChild";

export default class CartPost extends React.Component{
    render(){
        let num = 0;
        if(this.props.list.length){
            num = this.props.list.reduce((prev,next)=>{
                if(!next.isSelected)return prev;
                let n = Number(next.price.slice(1));
                return prev + next.num * n;
            },0);
        }
        let str = '';
        if(num >= 88){
            str = '已满足包邮条件';
        }else{
            let m = 88 - num;
            str = `再购${m}.00元满足免邮条件`;
        }
        return <div className='cart_post'>
            {num <= 0 ? <CartPostChild/>: <span className='post_desc'>{str}</span>}
            {num >= 88 || num == 0 ? '' : <i className='iconfont icon-gengduo'></i>}
        </div>
    }
}