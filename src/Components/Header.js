import React from "react";
import { Link } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AuthButton from "./AuthButton";
class Header extends React.Component {
  render() {
    const greeting = this.props.user.name
      ? `Welcome back ${this.props.user["given_name"]}!`
      : "Welcome to Dancing With Smurfs. Log in to see your garden.";
    // console.log(this.props.user.given_name);
    return (
      <>
        <h1>GARDEN APP</h1>
        <NavBar variant='success' className='bg-success p-2'>
          <Container>
            <Col lg='2'>
              <NavBar.Brand>{greeting}</NavBar.Brand>
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
              <AuthButton loggedIn={this.props.loggedIn} updateUser={this.props.updateUser} />
            </Col>
          </Container>
        </NavBar>
      </>
    );
  }
}

export default Header;
