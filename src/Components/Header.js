import React from "react";
import { Link } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AuthButton from "./AuthButton";
class Header extends React.Component {
  render() {
    const greeting = this.props.user.name
      ? `Welcome back, Farmer ${this.props.user["given_name"]}!`
      : "Welcome to the party. Log in to see your garden.";
    return (
      <div className='bg-primary' style={{borderRadius: '5px', width: '100%'}}>
        <h1 className='text-light'>Garden Party</h1>
        <NavBar className='bg-primary p-2'>
          <Container>
            <Col lg='2'>
              <NavBar.Brand className='text-light'>{greeting}</NavBar.Brand>
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
      </div>
    );
  }
}

export default Header;
