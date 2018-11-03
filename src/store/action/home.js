import * as Types from '../action-types'
import {getCategory, getSliders, getList} from "../../api/home"
// import { counter } from "../../../until"
export default {
    getCategory() {
        return function (dispatch, getState) {
            getCategory().then(category=>{
                dispatch({
                    type:Types.GET_CATEGORY,
                    payload:category
                })
            })
        }
    },
    getSlider() {
        return function (dispatch, getState) {
            getSliders().then(sliders=>{
                dispatch({
                    type:Types.GET_SLIDER,
                    payload:sliders
                })
            })
        }
    },
    getList(){
        return function (dispatch, getState) {
            getList().then(list=>{
                dispatch({
                    type:Types.GET_LIST,
                    payload:list
                })
            })
        }
    },
}