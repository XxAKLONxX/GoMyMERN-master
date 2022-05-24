import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
import { getTicket } from '../redux/actions/ticket';
import { Link, useParams, useNavigate } from 'react-router-dom';




function TicketList() {
  const load = useSelector((state) => state.ticketReducer.load);
  
  const tickets = useSelector((state) => state.ticketReducer.tickets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch]);
  const navigate =useNavigate()
  const {email} = useParams()
  return <div><>Ticket List</>{load ? (<p>Loading</p>): tickets.map((el)=>( <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{el.place}</Card.Title>
    
    <Card.Subtitle className="mb-2 text-muted">{el.time}</Card.Subtitle>
    <Card.Text>
      {el.comment}
    </Card.Text>
    <button onClick={()=>navigate.push(`/ClientProfile/:${el.name}`)}><Card.Link >client Profile</Card.Link></button> 
    {/* <button onClick={()=>navigate.push(`/ClientProfile/:${el.name}`)}><Card.Link >client Profile</Card.Link></button>  */}
   {/* <Link  to={`/ClientProfile/${el.name}`}><Card.Link  >client Profile</Card.Link></Link>  */}
    {/* <Card.Link href="#">Another Link</Card.Link> */}    
  </Card.Body>
</Card>))}
   </div>;
}

export default TicketList;
