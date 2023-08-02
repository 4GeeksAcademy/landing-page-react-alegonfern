import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (<>
<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className='container'>
  <a className="navbar-brand text-light" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Features</a>
      </li>
    </ul>
    </div>
  </div>
</nav></>
    //
 //   <Navbar  className="bg-secondary">
  //    <Container>
   //     <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
   //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //    <Navbar.Collapse id="basic-navbar-nav">
    //      <Nav className="me-auto text-light">
    //       <Nav.Link href="#home">Home</Nav.Link>
     //       <Nav.Link href="#link">About</Nav.Link>
      //      <Nav.Link href="#link">Services</Nav.Link>
      //      <Nav.Link href="#link">Contact</Nav.Link>
           
     //     </Nav>
    //    </Navbar.Collapse>
    //  </Container>
   // </Navbar>

  );
}

export default NavBar;