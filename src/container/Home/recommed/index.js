import React, { Component } from 'react'
import Swiper from './Swiper';
import Scroll from './Scroll';
import Counter from './Counter';
import Mix from './Mix';
import Footer from './Footer';

import './index.less'

export default class recommend extends Component {
  getList1=()=>{
    return this.props.list.filter((item,index)=>{
        return item.id<=8
    })
  }
  getList2=()=>{
    return this.props.list.filter((item,index)=>{
        return item.id>=13
    })
  }
  getList3=()=>{
    return this.props.list.filter((item,index)=>{
        return item.id<=6
    })
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="content">
      
        <Swiper sliders={this.props.sliders}/>
        <Scroll list={this.getList1()} color="#8BA0B6" bg=" #f1f5f9" p="#D8E5F1"/>
        <Scroll list={this.getList2()} color="#b4ba61" bg="#f5f6e9" p="#eaeeb3"/>
        <Counter list={this.getList3()}/>
        <Mix list={this.getList2()} img={this.props.sliders[0]}/>
        <Mix list={this.getList2()} img={this.props.sliders[8]}/>
        <Mix list={this.getList2()} img={this.props.sliders[2]}/>
        <Mix list={this.getList2()} img={this.props.sliders[3]}/>
        <Mix list={this.getList2()} img={this.props.sliders[4]}/>
        <Footer/>
      </div>
    )
  }
}
