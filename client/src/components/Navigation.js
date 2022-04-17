// import React from 'react'
// import { Navbar,Nav,Container, Button } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { logOut } from '../redux/actions/user'


// function Navigation() {
//   const dispatch = useDispatch()
//   const isAuth =  useSelector((state)=>state.userReducer.isAuth)
//   return (
//     <div><Navbar bg="dark" variant="dark">
//     <Container>
//   <Link><Navbar.Brand >About</Navbar.Brand></Link>  
//     <Nav className="me-auto">
//     <Link to='/'><Button >Home</Button></Link>     
//     {/* {isAuth ? (
//     <Link to='/Signin'   ><Button  >LogOut</Button></Link>  ):(
//       <div>
//     <Link to='/Signin'> <Button>Signin</Button></Link> 
//     <Link to='/Signup'><Button>Signup</Button></Link>  
//     </div>
//     )} */}
//     </Nav>
//     </Container>
//   </Navbar></div>
    
//   )
// }
// // 

// export default Navigation