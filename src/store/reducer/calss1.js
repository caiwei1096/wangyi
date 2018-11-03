import * as Types from "../action-types";
let initState = {
    category:[],
    categoryBody:[],
    sliders:[],
    index:0,
};
export default function class1(state=initState,action) {
    switch (action.type){
        case Types.GET_CATEGORY:
            return {...state,category:action.payload};
        case Types.FILTER_CATEGORY:
            return {...state,categoryBody:action.payload.filter((item)=>{return item.id===action.id})[0].second};
        case Types.GET_SLIDERS:
            return {...state,sliders:action.payload};
        case Types.CHANGE_INDEX:
            return {...state,index:action.i}
    }
    return state;
}