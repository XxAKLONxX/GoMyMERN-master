import {SIGN_IN_USER,SIGN_UP_USER,LOAD, FAIL, LOG_OUT, GET_USER} from '../actionType/user'



const initialState={
    user:{},
    load:false,
    errors:[],
    users: [],
    isAuth:false
}
const userReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOAD:
            return{...state,load:true}
        case SIGN_IN_USER:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.user,isAuth:true}    
        case SIGN_UP_USER:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.user,isAuth:true}  
            case GET_USER:
            return { ...state, load: false, users: payload.users};   
        case FAIL:
            return{...state,load:false,isAuth:false,errors:payload}     
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
export default userReducer
