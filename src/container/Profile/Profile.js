import React, { Component } from 'react'
import "./index.less"
import {Link} from "react-router-dom"
import profile from "../../images/profile-touxiang.png"
export default class Profile extends Component {
  render() {
    return (
          <div className="profile">
          <Link to="/nav">
           <div className="profile-bg">
              <ul className="profile-left">
                     <img  src={profile} alt=""/>
                     <li className="profile-title">
                        <span>17600992130</span>
                        <span className="profile-text">普通用户</span>
                     </li>
            </ul>
            <div className="profile-right">
               <i className="iconfont icon-kuaisufan"></i>  
               <li className="profile-right-title">
                        <span>超级会员</span>
                        <span className="profile-text">立即试用</span>
                     </li>
            </div>
          </div>
</Link>


          <ul className="profile-list">
            <li className="profile-box">
              <i className="iconfont icon-order"></i>
              <span>我的订单</span>
            </li>
            <li className="profile-box-c">
              <i className="iconfont icon-rili"></i>
              <span>周六一起拼</span>
            </li>
            <li className="profile-box">
              <i className="iconfont icon-shouhoufuwu"></i>
              <span>售后服务</span>
            </li>
          </ul>

          <ul className="profile-list">
          <li className="profile-box">
              <i className="iconfont icon-wodeyouhuijuan"></i>
              <span>优惠券</span>
            </li>
            <li className="profile-box-c">
              <i className="iconfont icon-wodehongbao"></i>
              <span>我的红包</span>
            </li>
            <li className="profile-box">
              <i className="iconfont icon-youxiangou"></i>
              <span>优先购</span>
            </li>
          </ul>

          <ul className="profile-list">
          <li className="profile-box">
              <i className="iconfont icon-wodelipinqia"></i>
              <span>礼品卡</span>
            </li>
            <li className="profile-box-c">
              <i className="iconfont icon-jifenzhongxin"></i>
              <span>积分中心</span>
            </li>
            <li className="profile-box">
              <i className="iconfont icon-huiyuan"></i>
              <span>会员俱乐部</span>
            </li>
          </ul>

          <ul className="profile-list">
          <li className="profile-box">
              <i className="iconfont icon-dizhi"></i>
              <span>地址管理</span>
            </li>
            <li className="profile-box-c">
              <i className="iconfont icon-zhanghaoanquan"></i>
              <span>账号安全</span>
            </li>
            <li className="profile-box">
              <i className="iconfont icon-bangzhuyukefu"></i>
              <span>帮助与客服</span>
            </li>
          </ul>
          <ul className="profile-list">
            <li className="profile-b">
               <i className="iconfont icon-yijianfankui"></i>
              <span>意见反馈</span>
            </li>
          </ul>

        <div>
             <button className="profile-login">
                <span> <Link to={"/nav"}>退出登录</Link></span>
            </button>
        </div>
      </div>
      
    )
  }
}
