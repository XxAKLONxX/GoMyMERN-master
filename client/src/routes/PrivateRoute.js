import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const load= useSelector(state=>state.userReduser.load)
    const isAuth= useSelector(state=>state.userReduser.isAuth)
    
  return ( load?<p>Loading</p>:isAuth?children:<Navigate to='/'/>
  
  )
}

export default PrivateRoute;

