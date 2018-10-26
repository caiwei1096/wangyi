import * as Types from '../action-types'
import {combineReducers} from 'redux'
import {goods} from './goods'

//合并reducer
let reducers = combineReducers({
    goods
})

export default reducers;