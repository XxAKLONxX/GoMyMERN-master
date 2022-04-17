import axios from 'axios'
import { FAIL, LOAD, LOG_OUT, SIGN_IN_USER } from '../actionType/user'





export const signup = (newUser) => async (dispatch) => {
    dispatch({type:LOAD})
    try {
        let result= await axios.post("/api/user/signupuser",newUser)
        dispatch({
            type:SIGN_IN_USER , 
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL,
            payload:error.response.data.errors
        })
    }
}


export const signin = (user)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
        let result= await axios.post("/api/user/signinuser",user)
        dispatch({
            type:SIGN_IN_USER , 
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL,
            payload:error.response.data.errors
        })
        
    }
}
export const logOut=()=>{
    return {type:LOG_OUT}
}