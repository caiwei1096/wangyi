import React ,{Component} from 'react'
import ReactSwipe from 'react-swipe';
export default class GoodSwiper extends Component{
    render(){
        return <div>
            <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto:3000}}>
                <div><img src="http://yanxuan.nosdn.127.net/316565aa03bd5fa262a5f5fee67dd097.jpg?imageView&quality=75" alt=""/>PANE 1</div>
            </ReactSwipe>
        </div>
    }
}