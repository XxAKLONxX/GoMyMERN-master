import {SIGN_IN_EMPLOYEE,SIGN_UP_EMPLOYEE,LOADEMP, FAILEMP, LOG_OUT, GET_EMP, GET_ONE_EMP} from '../actionType/employee'



const initialState={
    employee:{},
    load:false,
    errors:[],
    isAuthEmp:false,
    employees:
    []
}
const employeeReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOADEMP:
            return{...state,load:true}
        case SIGN_IN_EMPLOYEE:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,employee:payload.employee,isAuthEmp:true}    
        case SIGN_UP_EMPLOYEE:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,employee:payload.employee,isAuthEmp:true}    
        case FAILEMP:
            return{...state,load:false,isAuthEmp:false,errors:payload}    
        case GET_EMP:
            return {...state, load: false, employees: payload.employees}; 
        case GET_ONE_EMP:
            return {...state, load: false, employee: payload.employee}; 
        case LOG_OUT:
            localStorage.removeItem("token")
            return{
            employee:{},
            load:false,
            errors:[],
            isAuthEmp:false
        }
        default:
            return state
    }
}
export default employeeReducer
