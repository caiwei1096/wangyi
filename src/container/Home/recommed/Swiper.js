import React from "react";
import ReactSwipe from "react-swipe";
import Loading from '../../../component/loading/Loading'
export default class HomeSlider extends React.Component{
    constructor(){
        super();
        this.state = {index:0}
    }
    render(){
        let  option = {
            continuous: true,
            auto:2000,
            callback:(index)=>{this.setState({index})}
        }
        return <div className="box">
            <div className="home-swipe">
                {this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={option} key={this.props.sliders.length}>
                        {
                            this.props.sliders.map((item,index)=>{
                                return <div key={index}>
                                    <img src={item.url} alt={item}/>
                                </div>
                            })
                        }
                </ReactSwipe>:<Loading/>}
                    <div className="focus">
                    {this.props.sliders.map((item,index)=>{
                        return <span key={index} className={index===this.state.index?"active":""}></span>
                    })}
                </div>
            </div>
            <div className="footer">
                <ul>
                    <li>
                        <i className="iconfont icon-gouxuanicon"></i>
                        <span>网易自营品牌</span>
                    </li>
                    <li>
                        <i className="iconfont icon-gouxuanicon"></i>
                        <span>30天无忧退货</span>
                    </li>
                    <li>
                        <i className="iconfont icon-gouxuanicon"></i>
                        <span>48小时快速退款</span>
                    </li>
                </ul>
            </div>
        </div>
    }
}
