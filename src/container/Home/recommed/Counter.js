import React, { Component } from 'react'
import "./index.less"
import { counter } from "../../../until"

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state={time:[0,0,0]};
  }
  timeCounter=()=>{
    let timer=window.setInterval(()=>{
      let time=counter(TarT);
      this.setState({time:time})
  },1000)
  let TarT=new Date().getTime()+3600000
}
componentDidMount(){
 this.timeCounter()
}
  render() {
    let time=this.state.time;
    return (
      <div>
        <div className="timer">
          <p className="infe">限时购</p>
          <div className="counter">
            <span>{time[0]!==undefined?(time[0]<10?`0${time[0]}`:time[0]):''}</span>
            <i>:</i>
            <span>{time[1]!==undefined?(time[1]<10?`0${time[1]}`:time[1]):''}</span>
            <i>:</i>
            <span>{time[2]!==undefined?(time[2]<10?`0${time[2]}`:time[2]):''}</span>
          </div>
          <p className="more">更多></p>
        </div>
        <ul className="goods">
          {this.props.list.map((item,index)=>{
            return <li key={index}>
            <img src={item.url}></img>
            <p>{item.price}</p>
          </li>
          })}
        </ul>
      </div>
    )
  }
}