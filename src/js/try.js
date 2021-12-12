import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavBar, Nav } from "react-bootstrap";
import "../css/try.css";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import {Menu} from "react-bootstrap";

export default function Try(){
    return(
    // <Navbar bg="dark" variant="dark" expand="lg" fixed = "top">
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="mr-auto">
    //             <Nav.Link href="/">Home</Nav.Link>
    //             <Nav.Link href="/favorite">Favorite</Nav.Link>
    //             <Nav.Link href="/postJob">Post Job</Nav.Link>
    //             </Nav>
    //             </Navbar.Collapse>
    // </Navbar>

//     <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</Container>
    )

    
}
