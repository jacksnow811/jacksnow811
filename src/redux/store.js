import {createStore ,applyMiddleware,combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({
    he:countReducer,
    rens:personReducer
})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))