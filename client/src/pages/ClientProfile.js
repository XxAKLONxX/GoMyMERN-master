import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom';
import { logOut } from '../redux/actions/user';






const ClientProfile = ()=>{
  const dispatch = useDispatch()
  const load= useSelector(state=>state.userReducer.load)
  const isAuth= useSelector(state=>state.userReducer.isAuth)
  const user= useSelector(state=>state.userReducer.user) 
  const isAuthAD = useSelector((state)=> state.adminReducer.admin)
  return (
    <div>
      {load?<p>Loading</p>:isAuth || isAuthAD ?<div> <h2>profil of {user.name}</h2> <h5>name : {user.name}</h5></div>:<div><Navigate to='/Signin'></Navigate></div>}
       
      <Link to={'/ClientTicket'}><Button>Create a Ticket</Button></Link> 
       <Link to={'/Signin'}><button onClick={() => dispatch(logOut(user))}>Log OUT</button></Link>
    </div>
  ) 
}

export default ClientProfile