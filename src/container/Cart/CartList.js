import React from 'react';

export default class CartList extends React.Component{
    render(){
        return <div className='cart_list'>
            <ul>
                {this.props.list.length ? this.props.list.map((item,index) => {
                    return <li key={index}>
                        <div className='choose'>
                            {item.isSelected ? <i onClick={() => {this.props.setChoose({index})}} className='iconfont icon-gouxuan'></i> : <i onClick={() => {this.props.setChoose({index})}} className='iconfont icon-radio'></i>}
                        </div>
                        <div className='cart_img'>
                            <img src={item.url} alt=""/>
                        </div>
                        <div className='info_box'>
                            <p className='title'>{item.title}</p>
                            <p className='props'>{item.prop}</p>
                            <div className='foot'>
                                <span className='price'>{item.price}</span>
                                <span className='del_price'>{item.del_price}</span>
                                <div className='change_num'>
                                    <i onClick={() => { item.num > 1 ? this.props.setNum({i:index,num:-1}):''}} className='iconfont icon-minus-frameless'></i>
                                    <input className='num' onChange={() => {}} type="text" value={item.num}/>
                                    <i onClick={() => {this.props.setNum({i:index,num:1})}} className='iconfont icon-add-frameless'></i>
                                </div>
                            </div>
                        </div>
                    </li>
                }): ''}
            </ul>
        </div>
    }
}