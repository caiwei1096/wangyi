import * as Types from '../action-types';

let initState = {
    currentTypes:true, // 头部编辑状态
    allStatus:false, // 编辑页面，底部的选中状态
    delStatus:false, // 删除页面，底部的选中状态
    a:true, // 没有实际意义，仅用于渲染页面
    goodList:[] // 购物车列表信息
}
export default function home(state=initState,action) {
    switch (action.type) {
        case Types.GET_CARTLIST:
            let allstatus = action.payload.every((item) => {
                return item.isSelected;
            })
            return {...state,goodList:action.payload,allStatus:allstatus};
        case Types.SET_CHOOES:
            let status = action.payload.every((item) => {
                return item.isSelected;
            })
            return {...state,goodList:action.payload,allStatus:status,a:!state.a};
        case Types.SET_NUM:
            return {...state,goodList:action.payload,a:!state.a};
        case Types.SET_CURTYPE:
            if(state.currentTypes){
                return {...state,currentTypes:!state.currentTypes}
            }else{
                console.log(action.payload);
                return {...state,currentTypes:!state.currentTypes,delStatus:false,goodList:action.payload};
            }
        case Types.SET_DEL:
            let delStatus = action.payload.every((item) => {
                return item.delSelect;
            })
            return {...state,goodList:action.payload,delStatus:delStatus,a:!state.a};
        case Types.DEL_DATA:
            return {...state,goodList:action.payload,a:!state.a};
    }
    return state;
}


