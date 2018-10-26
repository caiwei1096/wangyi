import * as Types from "../action-types";

let initState = {
    sliders: [],
    lessons: {
        list: [],//存储当前的课程数据
        offset: 0,
        limit: 5,
        hasMore: true,
        title:''
    }
}

export function goods(state = initState, action) {
    switch (action.type) {
        case Types.SET_SLIDERS_GOODS:
            return {...state, sliders: action.payload}
        case  Types.SET_SLIDERS_LIST:
            return {...state,
                lessons:{
                    list: [...state.lessons.list, ...action.payload.list],
                    offset: state.lessons.offset + state.lessons.limit,//5 10 15
                    limit: 5,
                    hasMore: action.payload.hasMore
                }}
    }
    return state;
}