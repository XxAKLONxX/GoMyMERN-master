import {SIGN_IN_ADMIN,LOAD, FAIL, LOG_OUT} from '../actionType/admin'


const initialState={
    admin:{},
    load:false,
    errors:[],
    isAuthAd
:false
}
const adminReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD:
            return{...state,load:true}
        case SIGN_IN_ADMIN:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,admin:payload.admin,isAuthAd
:true}        
        case FAIL:
            return{...state,load:false, isAuthAd
                :false,errors:payload}     
        case LOG_OUT:
            localStorage.removeItem("token")
            return{
            admin:{},
            load:false,
            errors:[],
            isAuthAd
:false
        }
        default:
            return state
    }
}
export default adminReducer
