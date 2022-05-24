import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getemployee, getoneemployee } from '../redux/actions/employee';
import {Link} from 'react-router-dom';





function EmployeesList() {
  const load = useSelector((state) => state.employeeReducer.load);
  const isAuthEmp = useSelector((state) => state.employeeReducer.isAuthEmp);
  const employees = useSelector((state) => state.employeeReducer.employees);
  const employee = useSelector((state) => state.employeeReducer.employee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getemployee());
  }, [dispatch]);
  const getHim = () => {
    dispatch(getoneemployee(employee))
  }

  return <div><h1>Employees List</h1>{load ? (<p>Loading</p>): employees.map((el)=>( <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    
    <Card.Subtitle className="mb-2 text-muted">{el.lastName}</Card.Subtitle>
    <Card.Text>
      {el.email}
    </Card.Text>
   <Link  to={`/EmployeeProfile/${el._id}`}><Card.Link href="#">Profile</Card.Link></Link> 

    
  </Card.Body>
</Card>))}
   </div>;
}

export default EmployeesList;
