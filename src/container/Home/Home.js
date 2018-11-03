import React, { Component } from 'react'
import HomeSearch from './HomeSearch'
import { connect } from 'react-redux';
import action from '../../store/action/home';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Recommend from './recommed';
import Item from './Item';

class Home extends Component {
  componentDidMount(){
    this.props.getCategory()
    this.props.getList()
    this.props.getSlider()
  }
  render() {
    console.log(this.props.list)
    return (
      <div className="box">
        <HomeSearch list={this.props.category}/>
        <Recommend sliders={this.props.sliders} list={this.props.list}/>
      </div>
    )
  }
}

export default connect(state=>({...state.home}),action)(Home)