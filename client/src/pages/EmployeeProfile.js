import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const EmployeeProfile = () => {
  const load = useSelector((state) => state.employeeReducer.load);
  const isAuthEmp = useSelector((state) => state.employeeReducer.isAuthEmp);
  const employee = useSelector((state) => state.employeeReducer.employee);
  const isAuthAD = useSelector((state)=> state.adminReducer.admin)
  return (
    <div>
      <h1>Employee Profile</h1>
      {load ? (
        <p>Loading</p>
      ) : isAuthEmp || isAuthAD  ? (
        <div>
          
        <h2>profil of {employee.name}</h2> <h5>name : {employee.name}</h5>
        </div>
      ) : (
        <div><Navigate to='/SigninEmp'></Navigate></div>
      )}
      
      <Button>Back To View</Button>
    </div>
  );
}

export default EmployeeProfile;
