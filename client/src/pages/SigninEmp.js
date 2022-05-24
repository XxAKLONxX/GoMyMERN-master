import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {signinEmp} from '../redux/actions/employee';




const SigninEmp = () =>  {
  const [employee, setEmployee] = useState({})
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1>Employee Singin</h1>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        placeholder="enter Email here"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="enter Password here"
        name="password"
        onChange={handleChange}
      />
      <Link to={`/EmployeeProfile/${employee._id} `}><button onClick={() => dispatch(signinEmp(employee))}>Submit</button></Link>
    </div>
  );
}


export default SigninEmp;
