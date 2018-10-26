import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {NavLink} from 'react-router-dom'

export default class GoodSliders extends Component {
    constructor() {
        super()
        let divStyle = {
            // backgroundImage: `url(${})`,
        };
    }

    /*  componentDidMount() {因为这个是异步的
          var mySwiper = new Swiper('.swiper-container', {
              slidesPerView: 4,
              spaceBetween: 10,
              freeMode : true,
            //  autoplay:true,
            //  autoplayDisableOnInteraction : false,
              observer:true,//修改swiper自己或子元素时，自动初始化swiper
              observeParents:true
          })


      }*/
    componentDidUpdate() {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            freeMode: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true
        })
    }

    render() {
        return <div className='slides'>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.props.list.map((item, index) => {
                        if (index < 10) {
                            return <NavLink to={'/'}className="swiper-slide" key={index}>
                            <div className='divslider'
                                style={{
                                            backgroundImage: `url("${item.url}")`,
                                            backgroundPosition: `center`,
                                            backgroundRepeat: 'no-repeat'
                                        }}>
                                <div className='topnum'><span>{Math.round(Math.random()*20)+'件'}</span></div>
                                <div className='title'>{item.flag}</div>
                                </div>
                            </NavLink>
                        }
                    })}


                </div>
            </div>
        </div>
    }
}
