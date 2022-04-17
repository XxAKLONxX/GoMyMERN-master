import userReducer from './user'
import {combineReducers} from 'redux'


const rootReducers = combineReducers({
    userReducer,
})
export default rootReducers