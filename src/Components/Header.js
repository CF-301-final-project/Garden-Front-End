import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>GARDEN APP</h1>
        <NavBar variant='success' className='bg-success p-2'>
          <Container>
            <Col lg='2'>
              <NavBar.Brand>Welcome to your Garden</NavBar.Brand>
            </Col>
            <Col lg='3'>
              <Link className='text-light m-2' to='/'>
                Home
              </Link>
              <Link className='text-light m-2' to='/about'>
                About
              </Link>
              <Link className='text-light m-2' to='/inventory'>
                Inventory
              </Link>
            </Col>
          </Container>
        </NavBar>
      </>
    );
  }
}

export default Header;
