import React, {Component} from 'react'
import ReactSwipe from 'react-swipe';

export default class GoodSwiper extends Component {
    render() {
        return <div className='slider'>
            <ReactSwipe className="carousel"
                        key={this.props.sliders.length}
                        swipeOptions={{continuous: true}}>
                {this.props.sliders.map((item,index)=>{
                    return <img  src={item.url} key={index} alt=""/>
                })}
            </ReactSwipe>
        </div>
    }
}