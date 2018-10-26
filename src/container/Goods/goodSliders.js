import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
export default  class GoodSliders extends Component{
    render(){
        return <div className='smallslider'>
            <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <img src="http://yanxuan.nosdn.127.net/316565aa03bd5fa262a5f5fee67dd097.jpg?imageView&quality=75" alt=""/>
            </ReactSwipe>
        </div>
    }
}