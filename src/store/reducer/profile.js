
import * as Types from "../action-types";
let sessonState = {
    success: '',
    error: '',
    a:''
}

export  function profile(state = sessonState, action) {
    debugger;
    console.log(action, 'action,action');
    switch (action.type) {
        case Types.SET_LOGIN:
            console.log(action,'action');
            debugger;
            return {...state,a:action.val.success}
    }

    return state;
}