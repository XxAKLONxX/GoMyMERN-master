import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/user";
import {Link} from 'react-router-dom'



const Signin = () =>{
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
    <div>
      <h1>Client Singin</h1>
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
      <Link to={'/ClientProfile '}><button onClick={() => dispatch(signin(user))}>Submit</button></Link>
    </div>
  );
}

export default Signin;
