
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'


const AdminView =()=> {
  const load = useSelector(state=>state.adminReducer.load)
  const isAuthAd= useSelector(state=>state.adminReducer.isAuthAd)
  const admin= useSelector(state=>state.adminReducer.admin) 
  return (
    <div  style={{display:'flex',justifyContent:'space-between'}}>
      <h1>Hello Admin</h1>
     {load?<p>Loading</p>:isAuthAd?<div> <h1>{admin.name} View </h1>
    
    </div>:<><Navigate to='/SiginAD'></Navigate></>} 
    <div>
    <Link to={'/TicketList'}><button><h3>Tiket's List</h3></button></Link> 
     <Link to={'/EmployeesList'}><button><h3>Employee's List</h3></button></Link> 
      </div>
      </div>
     
  )
}

export default AdminView