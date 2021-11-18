import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar variant='success' className='bg-success p-2'>
            <Nav>
              <Navbar.Brand className='text-light'>Not garden stuff</Navbar.Brand>
              <Nav.Link className='text-light' href='https://github.com/garden-fullstack-app'>
                github
              </Nav.Link>
            </Nav>
        </Navbar>
      </>
    );
  }
}

export default Footer;
