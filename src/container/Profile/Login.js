import React from 'react'
import profile from "../../images/logo.png"
import ProfileDetail from './Profile'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import actions from '../../store/action/profile'
import './index.less'

 class Login extends React.Component {
    login = () => {
        let username = this.username.value;
        let password = this.password.value;
        console.log(username, password);
        this.props.history.push('/profile')
    }

    render() {
        console.log(this.props,'this.propslogin');
        return <div>
            <div className='login'><img src={profile} alt=""/>
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
                        <Link to='/profiledetail'
                              onClick={this.login}>登录</Link>
                    </li>
                    <li>
                        <Link to='/profilereg'
                              onClick={this.login}>注册</Link>
                    </li>
                </ul>
            </div>

        </div>
    }
}
export default connect(state => ({...state.profile}), actions)(Login)