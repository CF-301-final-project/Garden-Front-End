import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

class WeatherButton extends React.Component {
  render() {
    return (
      <>
        <Container className='d-flex flex-row-reverse m-4' >
          <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
          </input>
          <Button variant="info" onClick={this.getWeather} >
            Get Weather!
          </Button>
        </Container>
      </>
    );
  }
}
export default WeatherButton;