import { combineReducers } from 'redux'
import { homeReducer, selectedHomeReducer } from './homeReducer'

const allReducers = combineReducers({
    allHomes: homeReducer,
    home: selectedHomeReducer,
})

export default allReducers;