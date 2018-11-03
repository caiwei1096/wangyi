import *as Types from "../action-types"
import {getCategory,getSlider} from "../../../api/class"
export default {
    getCategorys() {
        return function (dispatch, getState) {
            getCategory().then(category => {
                dispatch({
                    type: Types.GET_CATEGORY,
                    payload: category
                })
            })
        }
    },
    filterCategory(a=1) {
        // return {
        //     type:Types.FILTER_CATEGORY,
        //
        //     title:a
        // }
        return function (dispatch,getState) {
            getCategory().then(category => {
                dispatch({
                    type: Types.FILTER_CATEGORY,
                    payload: category,
                    id:a
                })
            })
        }

    },
    getSliders() {
        return function (dispatch, getState) {
            getSlider().then(sliders => {
                dispatch({
                    type: Types.GET_SLIDERS,
                    payload: sliders
                })
            })
        }
    },
    changeIndex(i){
        return {type:Types.CHANGE_INDEX,i:i}
    },
}