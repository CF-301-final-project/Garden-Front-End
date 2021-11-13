import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class PlantForm extends React.Component {
  render() {
    return (
      <Container className='mb-3'>
        <Form className='text-left'>
          <Form.Group as={Row} className='mb-2' controlId='Plant Name'>
            <Form.Label column sm='6'>
              Plant Name
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='What type of pest?'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='datePlanted'>
            <Form.Label column sm='6'>
              Date Planted
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='date'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='Something'>
            <Form.Label column sm='6'>
              Details or stuff
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='story time?!'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='stuff'>
            <Form.Label column sm='6'>
              Stuff
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='optional'></Form.Control>
            </Col>
          </Form.Group>
        </Form>
        <Button onClick={this.props.togglePestModal}>Submit</Button>
      </Container>
    );
  }
}

export default PlantForm;
