import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar variant='success' className='bg-success p-2'>
          <Container>
            <Nav>
              <Navbar.Brand>Not garden stuff</Navbar.Brand>
              <Nav.Link className='text-light' href='https://github.com/garden-fullstack-app'>
                github
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Footer;
