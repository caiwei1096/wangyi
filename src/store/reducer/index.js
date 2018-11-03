<<<<<<< HEAD
import * as Types from '../action-types'
import {combineReducers} from 'redux'
import {goods} from './goods'

//合并reducer
let reducers = combineReducers({
    goods
})
=======

import * as Types from "../action-types";

import {combineReducers} from 'redux'
import class1 from "./calss1"

import cart from './cart';
import home from './home'

//合并reducer
let reducers=combineReducers({
   class1,
   home,cart
});

>>>>>>> 926a6784389c2b767a7cff73233f9dcb06a4cd7a

export default reducers;