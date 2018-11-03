import React, { Component } from 'react'
import HomeSearch from './HomeSearch';
import { connect } from 'react-redux';
import action from '../../store/action/home';
import './index.less'
class Item extends Component {
  getSliders=()=>{
    this.sliders=this.props.sliders.filter((item,index)=>{
      return item.id==this.props.match.param.id
    })
  }
  render() {
    console.log(this.props,',,,',this.getSliders())
    return (
      <div>
        <HomeSearch list={this.props.category}/>
        <div className="item_imgBox">
          {/* <img src={this.getSliders().url?this.getSliders().url:''}></img> */}
        </div>
      </div>
    )
  }
}
export default connect(state=>({...state.home}),action)(Item)
