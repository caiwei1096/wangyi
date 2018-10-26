import * as Types from '../action-types'
import {getSliders,getList} from '../../api/goods'//注意此处应该解构一下
//goods-slider
export default {
    getslider() {
        //console.log('222');return ;
        return function (dispatch,getState) {
          getSliders().then(sliders => {
              console.log(sliders, 'slider1');
              dispatch({
                  type: Types.SET_SLIDERS_GOODS,
                  payload: sliders
              })
          })
      }
    },
    getList(){
        return function (dispatch, getState) {
            console.log(getState().goods,'dispatch');
            let { lessons: {offset, limit}} = getState().goods;
            getList(offset, limit).then(payload => {
                dispatch({type: Types.SET_SLIDERS_LIST, payload})
            })
        }
    }
}