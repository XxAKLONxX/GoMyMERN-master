import axios from 'axios'
import { LOAD, SIGN_IN_ADMIN } from '../actionType/admin'



export const Signin = (admin)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
        let result= await axios.post("/api/admin/signinad",admin)
        dispatch({
            type:SIGN_IN_ADMIN , 
            payload:result.data
        })
    } catch (error) {
        dispatch({
            type:FAIL,
            payload:error.response.data.errors
        })
        
    }
}