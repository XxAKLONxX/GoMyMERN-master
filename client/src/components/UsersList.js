import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getuser } from '../redux/actions/user';




function UsersList() {
  const load = useSelector((state) => state.userReducer.load);
  
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuser());
  }, [dispatch]);
  return <div><>User List</>{load ? (<p>Loading</p>): users.map((el)=>( <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    
    <Card.Subtitle className="mb-2 text-muted">{el.lastName}</Card.Subtitle>
    <Card.Text>
      {el.email}
    </Card.Text>
    <Card.Link href="#">client Profile</Card.Link>
    {/* <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>))}
   </div>;
}

export default UsersList;
