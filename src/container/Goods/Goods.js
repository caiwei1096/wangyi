import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
import GoodNav from './goodnav'
import GoodSlider from './goodSlider'
import GoodSliders from './goodSliders'
import {connect} from 'react-redux'
import actions from '../../store/action/goods'
  class Goods extends Component {
    componentDidMount(){
        //发送请求
        this.props.getslider();
        this.props.getList();


    }
    render() {
        console.log(this.props,'goodpropsrender');
        console.log(this.props.lessons.list,'list');

      return <div>
          <GoodNav></GoodNav>
          <GoodSlider sliders={this.props.sliders} ></GoodSlider>
          <GoodSliders list={this.props.lessons.list}></GoodSliders>

      </div>
    }
}
export default connect(state=>({...state.goods}),actions)(Goods)
