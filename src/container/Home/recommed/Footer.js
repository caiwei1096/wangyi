import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="bottom">
            <div className="type">
                <p>下载APP</p>
                <p>电脑版</p>
            </div>
            <p className="footer_text">
                <span>网易公司版权所有 © 1997-</span><br/>
                <span>食品经营许可证：JY13301080111719</span>
            </p>
        </div>
      </div>
    )
  }
}
