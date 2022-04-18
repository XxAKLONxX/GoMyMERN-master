import React from 'react'
import {Form,Button,NavDropdown} from 'react-bootstrap';



function ClientTicket() {
  return (
    <div><h1>ClientTicket</h1>
    <h4>Create a Ticket</h4>
    <Form  >
    <NavDropdown title="Place" id="navbarScrollingDropdown" >
         <NavDropdown.Item href="#action1">Hall</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action2">Chamber</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action3">Pool</NavDropdown.Item>
        
        </NavDropdown>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Time</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll send someone there immediatly
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Comment</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
    
    
    </div>

  )
}

export default ClientTicket