import * as Types from "../action-types";

let initState = {
    sliders: []
}

export function goods(state = initState, action) {
    switch (action.type) {
        case Types.SET_SLIDERS_GOODS:
            return {...state, sliders: action.payload}

    }
    return state;
}