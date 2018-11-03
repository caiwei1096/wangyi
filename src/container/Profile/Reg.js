import React from 'react'
import profile from "../../images/logo.png"
import ProfileDetail from './Profile'
import {Link} from "react-router-dom"
import './index.less'
import {connect} from 'react-redux'
import actions from "../../store/action/profile";

 class Login extends React.Component {
    reg1 = () => {
        let username = this.username.value;
        let password = this.password.value;

        console.log(username, password,'zhuce');
        debugger
        this.props.reg({username,password})
      //  this.props.history.push('/profile')
    }

    render() {
        console.log(this.props);
        return <div>
            <div className='login reg'><img src={profile} alt=""/>
            </div>
            <div >
                <ul>
                    <li><input type="text" placeholder='手机号' ref={(x) => {
                        this.username = x
                    }}/></li>
                    <li><input type="text" placeholder='密码' ref={(x) => {
                        this.password = x
                    }}/></li>
                    <li>
                      <button onClick={this.reg1}>注册</button>
                    </li>
                </ul>
            </div>

        </div>
    }
}
export default connect(state => ({...state.profile}), actions)(Login)