import * as Types from '../action-types'
import {combineReducers} from 'redux'
import {goods} from './goods'
import {profile} from './profile'
//合并reducer
let reducers = combineReducers({
    goods,
    profile
})

export default reducers;