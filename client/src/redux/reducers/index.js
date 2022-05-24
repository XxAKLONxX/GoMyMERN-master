import userReducer from './user'
import employeeReducer from './employee';
import adminReducer from './admin';
import ticketReducer from './ticket';
import {combineReducers} from 'redux'


const rootReducers = combineReducers({
    userReducer,employeeReducer,adminReducer,ticketReducer
})
export default rootReducers