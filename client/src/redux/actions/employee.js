import axios from 'axios'
import { FAIL, LOAD, SIGN_IN_EMPLOYEE } from '../actionType/employee'





export const signup = (newEmployee) => async (dispatch) => {
    dispatch({type:LOAD})
    try {
        let result= await axios.post("/api/employee/signupEmp",newEmployee)
        dispatch({
            type:SIGN_IN_EMPLOYEE , 
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL,
            payload:error.response.data.errors
        })
    }
}


export const Signin = (employee)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
        let result= await axios.post("/api/employee/signinEmp",employee)
        dispatch({
            type:SIGN_IN_EMPLOYEE , 
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL,
            payload:error.response.data.errors
        })
        
    }
}
export const logOutEmp=()=>{
    return {type:LOG_OUT}
}