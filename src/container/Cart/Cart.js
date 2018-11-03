import React, { Component } from 'react';
import {connect} from 'react-redux';
import actions from '../../store/action/cart';
import './index.less';
import CartHeader from './CartHeader';
import CartPost from './CartPost';
import CartList from './CartList';
import CartFooter from './CartFooter';
import CartListDel from "./CartListDel";

class Cart extends Component {
    componentDidMount(){
        this.props.getCartList();
    }
    render() {
        // console.log(this.props);
        return <div className='box'>
            <CartHeader curType={this.props.currentTypes} changeType={this.props.changeCurType}/>
            <CartPost list={this.props.goodList} />
            {this.props.currentTypes ?
                <CartList setChoose={this.props.setChoose} setNum={this.props.setNum} list={this.props.goodList}/> :
                <CartListDel setDelSelect={this.props.setDelSelect} setNum={this.props.setNum} list={this.props.goodList}/>
            }

            <CartFooter delData={this.props.delData} delStatus={this.props.delStatus} allStatus={this.props.allStatus} setChoose={this.props.setChoose} setDelSelect={this.props.setDelSelect} curType={this.props.currentTypes} list={this.props.goodList}/>
        </div>
    }
}

export default connect(state => ({...state.cart}),actions)(Cart)
