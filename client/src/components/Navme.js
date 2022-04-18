import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';



function Navme() {
  return <div>
  <Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Hotel</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">News</Nav.Link>
        <NavDropdown title="SignIn" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Signin as a Client</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">Signin as an Employee</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action3">Signin as an Admin</NavDropdown.Item>
        
        </NavDropdown>
        <Nav.Link href="#" >
          SigneUP
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
</div>;
}

export default Navme;
