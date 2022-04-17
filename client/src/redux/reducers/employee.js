import {SIGN_IN_EMPLOYEE,SIGN_UP_EMPLOYEE,LOAD, FAIL, LOG_OUT} from '../actionType/employee'



const initialState={
    user:{},
    load:false,
    errors:[],
    isAuth:false
}
const employeeReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD:
            return{...state,load:true}
        case SIGN_IN_EMPLOYEE:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.user,isAuth:true}    
        case SIGN_UP_EMPLOYEE:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.user,isAuth:true}    
        case FAIL:
            return{...state,load:false,errors:payload}     
        case LOG_OUT:
            localStorage.removeItem("token")
            return{
            user:{},
            load:false,
            errors:[],
            isAuth:false
        }
        default:
            return state
    }
}
export default employeeReducer
