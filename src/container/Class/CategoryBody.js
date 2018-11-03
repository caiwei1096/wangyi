import React, {Component} from "react"
import {connect} from "react-redux";
import actions from "../../store/action/class";

class CategoryBody extends Component {
    render() {
        console.log(this.props.sliders,222);

          return <div className="category-body">
              {this.props.sliders.filter((item,index)=>{
              return item.id == this.props.index+1
          }).map((item,index)=>{
              return <div className="advertising" key={index}>
                  <img src={item.url} alt=""/>
              </div>
          })}

                <ul>
                    {this.props.categoryBody.map((item,index)=>{
                        return  <li key={index}>
                        <p>{item.title}</p>
                        <ul>
                            {item.three.map((item,index)=>{
                               return <li key={index}>
                                   <img src={item.url} alt=""/>
                                   <span>{item.title}</span>
                               </li>
                            })}

                        </ul>
                        </li>
                    })
                    }



                </ul>
            </div>

    }
}
export default connect(state=>({...state.class1}),actions)(CategoryBody)

