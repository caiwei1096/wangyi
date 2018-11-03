import React, { Component } from 'react'
import './index.less'

export default class Scroll extends Component {
    componentDidMount(){
        this.changeColor(this.props.color)
        this.changeBg(this.props.bg)
        this.changePcolor(this.props.p)
    }
    changeColor=(color)=>{
        this.aside.style.color=color;
    }
    changeBg=(color)=>{
        this.aside.style.background=color;
    }
    changePcolor=(color)=>{
        this.p.style.background=color;
    }
  render() {
    return (
      <div>
        <div className="aside" ref={x=>{this.aside=x}}>
            <p>新品首发</p>
            <p ref={x=>{this.p=x}}>查看全部></p>
        </div>
        <div className="scroll">
            <div className="list">
                <ul>
                    {this.props.list.map((item,index)=>{
                        return <div key={index} className="imgBox">
                        <img src={item.url}></img>
                        <p>{item.title}</p>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                        </div>
                    })}
                </ul>
            </div>
        </div>
    </div>
    )
  }
}
