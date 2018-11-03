<<<<<<< HEAD
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class GoodNav extends Component {
    render() {
        return (
            <div className='row'>
                <div className='left'>
                    <NavLink to={'/'}><i className='iconfont icon-zhuye'></i></NavLink>
                    <NavLink to={'/'}>
                        <span>网易严选</span>
                    </NavLink>
                </div>

                <div className='right'>
                    <NavLink to={'/search'}>
                        <i className='iconfont icon-sousuo'></i>
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <i className='iconfont icon-icon--'></i>
                    </NavLink>
                </div>
            </div>
        )
    }
}
=======
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
export default class GoodNav extends Component {
    render() {
        return (
            <div className='row'>
                <div className='left'>
                    <NavLink to={'/'}><i className='iconfont icon-zhuye'></i></NavLink>
                    <NavLink to={'/'}>
                        <span>网易严选</span>
                    </NavLink>
                </div>

                <div className='right'>
                    <NavLink to={'/search'}>
                        <i className='iconfont icon-sousuo'></i>
                    </NavLink>
                    <NavLink to={'/cart'}>
                        <i className='iconfont icon-icon--'></i>
                    </NavLink>
                </div>
            </div>
        )
    }
}
>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a
