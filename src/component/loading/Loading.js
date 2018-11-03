import React, { Component } from 'react'
import "./index.less"
export default class Loading extends Component {
  render() {
    return (
      <div className="loading-slider">
        <div className='loader loader--snake'></div>
      </div>
    )
  }
}
