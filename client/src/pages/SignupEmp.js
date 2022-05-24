import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupEmp } from "../redux/actions/employee";

const SignupEmp = () => {
  const [newEmployee, setNewEmployee] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Employee Signup</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="enter name here"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        placeholder="enter last name here"
        name="lastName"
        onChange={handleChange}
      />
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
      <Link to={"/Pending"}>
        <button onClick={() => dispatch(signupEmp(newEmployee))}>Submit</button>
      </Link>
    </div>
  );
};

export default SignupEmp;
