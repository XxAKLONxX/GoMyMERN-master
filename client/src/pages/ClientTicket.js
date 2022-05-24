import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTicket } from '../redux/actions/ticket';



function ClientTicket() {
  const [newTicket, setNewTicket] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
  };
  return (
    <div><h1>ClientTicket</h1>
    <h4>Create a Ticket</h4>
    <Form  >
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Place</Form.Label>
    <Form.Control  name="place"
        onChange={handleChange} type="text" placeholder="Place of the required help" />
    <Form.Text className="text-muted">
      We'll send someone there immediatly
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Time</Form.Label>
    <Form.Control  name="time"
        onChange={handleChange} type="text" placeholder="Time of the creation of the ticket" />
    <Form.Text className="text-muted">
      We'll send someone there immediatly
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Comment</Form.Label>
    <Form.Control  name="comment"
        onChange={handleChange} type="text" placeholder="Add you comment here" />
  </Form.Group>
 
  <Button onClick={() => dispatch(addTicket(newTicket))} variant="primary" type="submit">
    Send
  </Button>
</Form>
    
    
    </div>

  )
}

export default ClientTicket