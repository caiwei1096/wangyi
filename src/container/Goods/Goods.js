import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
import GoodNav from './goodnav'
import GoodSlider from './goodSlider'
import GoodSliders from './goodSliders'
import GoodList from './goodlist'
import {connect} from 'react-redux'
import actions from '../../store/action/goods'
import Modal from '../../component/AlertGoods/alertgoods'

class Goods extends Component {
    constructor() {
        super();
        this.state={show:false}
    }

    componentDidMount() {
        //发送请求
        this.props.getslider();
        this.props.getList();
    }
    switchModal = () => this.setState({show: !this.state.show})
    render() {
       let  show=this.state.show
        return <div>
            <GoodNav></GoodNav>
            <GoodSlider sliders={this.props.sliders}></GoodSlider>
            <GoodSliders list={this.props.lessons.list}></GoodSliders>
            <GoodList></GoodList>
        </div>
    }
}

export default connect(state => ({...state.goods}), actions)(Goods)
