<<<<<<< HEAD
import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom'

export default class GoodSwiper extends Component {
    render() {
        return <div className='slider'>
            <NavLink  to={'/'}>
            <ReactSwipe className="carousel"
                        key={this.props.sliders.length}
                        swipeOptions={{continuous: true,auto:3000}}>
                {this.props.sliders.map((item, index) => {
                    return <img src={item.url} key={index}  alt=""/>
                })}
            </ReactSwipe>
                </NavLink>
        </div>
    }
=======
import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom'

export default class GoodSwiper extends Component {
    render() {
        return <div className='slider'>
            <NavLink  to={'/'}>
            <ReactSwipe className="carousel"
                        key={this.props.sliders.length}
                        swipeOptions={{continuous: true,auto:3000}}>
                {this.props.sliders.map((item, index) => {
                    return <img src={item.url} key={index}  alt=""/>
                })}
            </ReactSwipe>
                </NavLink>
        </div>
    }
>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a
}