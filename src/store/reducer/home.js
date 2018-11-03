import * as Types from '../action-types'

let initState={
    sliders:[],
    category:[],
    list:[],
    hours:[],
    min:[],
    sed:[]
}
export default function home(state=initState,action){
    switch (action.type) {
        case Types.GET_CATEGORY:
            return {...state,category:action.payload}
        case Types.GET_SLIDER:
            return {...state,sliders:action.payload}
        case Types.GET_LIST:
            return {...state,list:action.payload}
        case Types.TIME:
            return {...state,hours}
        // case Types.SET_LESSONS:
        //     return {...state,lessons:{
        //         list:[...state.lessons.list,...action.payload.list],
        //         offset:state.lessons.offset+state.lessons.limit,
        //         limit:5,
        //         hasMore:true,
        //     }}
        default:
            break;
    }
    return state
}
