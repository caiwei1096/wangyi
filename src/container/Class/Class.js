import React, {Component} from "react"
import {Route,Link} from "react-router-dom"
import "./index.less"
import {connect} from "react-redux"
import actions from "../../store/action/class"
import CategoryNav from "./CategoryNav"
import CategoryBody from "./CategoryBody"

class Class extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getCategorys();
        this.props.filterCategory();
        this.props.getSliders();
        console.log(this.props.sliders,999);
    }
    render() {
        return <div className="category">
            <div className="search">
                <Link to="/search">
                    <div className="input">
                        <i className="iconfont icon-sousuo"></i>
                        <span>搜索商品,共123456件商品</span>
                    </div>
                </Link>
            </div>
            <CategoryNav category={this.props.category}></CategoryNav>
            {/*<CategoryBody></CategoryBody>*/}
            <div className="categoryHead">
                <Route path="/class/category/:id" component={CategoryBody}/>
                <Route path="/class" exact={true}  component={CategoryBody}/>
            </div>
        </div>
    }
}
export default connect(state=>({...state.class1}),actions)(Class)
