import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const EmployeePrivateRoute = ({children}) => {
    const load= useSelector(state=>state.EmployeeReduser.load)
    const isAuthEmployee= useSelector(state=>state.EmployeeReduser.isAuthEmployee)
    
  return ( load?<p>Loading</p>:isAuthEmployee?children:<Navigate to='/EmployeeProfile'/>
  
  )
}

export default EmployeePrivateRoute;
