import React, {Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import actions from "../../store/action/class";



class CategoryNav extends Component {
    constructor(){
        super();
        this.index=1;
    }

    render() {
        console.log(this.props,111);
        return <div className="category-nav">
            <ul className="category-header">
                {
                    this.props.category.map((item,index)=>{
                        return <li className={index==this.props.index?"current":""} key={index} onClick={()=>{
this.props.filterCategory(item.id);
this.props.changeIndex(index)
                        }
                        }>
                            <Link to={"/class/category/"+item.id}>{item.title}</Link>
                        </li>
                    })
                }

            </ul>
        </div>
    }
}
export default connect(state=>({...state.class1}),actions)(CategoryNav)

