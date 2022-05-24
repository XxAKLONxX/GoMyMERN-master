import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SigninAd } from '../redux/actions/admin';
import {Link} from 'react-router-dom';





const SigninAD = () =>{
  const [admin, setadmin] = useState({})
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    setadmin({...admin,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1>Admin Singin</h1>
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
      <Link to={'/AdminView'}><button onClick={() => dispatch(SigninAd(admin))}>Submit</button></Link>
    </div>
  );
}

export default SigninAD;
