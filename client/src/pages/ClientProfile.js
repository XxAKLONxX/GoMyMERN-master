import React from 'react'
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';






const ClientProfile = ()=>{
  const load= useSelector(state=>state.userReducer.load)
  const isAuth= useSelector(state=>state.userReducer.isAuth)
  const user= useSelector(state=>state.userReducer.user) 
  return (
    <div>
      {load?<p>Loading</p>:isAuth?<div> <h2>profil of {user.name}</h2> <h5>name : {user.name}</h5></div>:<div>{alert('retry')}</div>}
       <Navigate to='/signin'  />
       <Button>Create a Ticket</Button>
    </div>
  ) 
}

export default ClientProfile