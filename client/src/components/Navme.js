import React from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {Link, link} from 'react-router-dom';
;



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
       
      
      
      
      <Link to='/'><Nav.Link href="#action1" >Home</Nav.Link></Link>  
      <Link to='/Pending'><Nav.Link href="#action2">News</Nav.Link></Link>  
        <NavDropdown title="SignIn" id="navbarScrollingDropdown">
        <Link to='/Signin'> <NavDropdown.Item href="#action3">Signin as a Client</NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <Link to='SigninEmp'>  <NavDropdown.Item href="#action4">Signin as an Employee</NavDropdown.Item></Link>
          <NavDropdown.Divider />
          <Link to='SigninAD'>  <NavDropdown.Item href="#action5">Signin as an Admin</NavDropdown.Item> </Link>
        
        </NavDropdown>
        <NavDropdown title="SignUp" id="navbarScrollingDropdown">
        <Link to='/SignUp'>  <NavDropdown.Item href="#action6" >
          SigneUP
        </NavDropdown.Item> </Link>
        <NavDropdown.Divider />
        <Link to='/SignupEmp'>  <NavDropdown.Item href="#action7" >
          SigneUP As Employee
        </NavDropdown.Item> </Link>
        </NavDropdown>
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
