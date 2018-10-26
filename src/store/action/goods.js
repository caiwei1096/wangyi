import * as Types from '../action-types'
import {getSliders} from '../../api/goods'//注意此处应该解构一下
//goods-slider

export default {
    getslider() {
        //console.log('222');return ;
        return function (dispatch,getState) {
          getSliders().then(sliders => {
              console.log(sliders, 88888);
              dispatch({
                  type: Types.SET_SLIDERS_GOODS,
                  payload: sliders
              })
          })
      }
    }
}