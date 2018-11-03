import React, { Component } from 'react'

export default class Mix extends Component {
  render() {
    return (
      <div>
        <div className="img_box">
           <img src={this.props.img?this.props.img.url:''}></img>
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
