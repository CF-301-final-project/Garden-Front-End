import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class PestForm extends React.Component {
  render() {
    return (
      <Container className='mb-3'>
        <Form className='text-left'>
          <Form.Group as={Row} className='mb-2' controlId='Pest Name'>
            <Form.Label column sm='6'>
              Pest Name
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='What type of pest?'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='pestDate'>
            <Form.Label column sm='6'>
              Date Spotted
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='date'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='Plants Affected'>
            <Form.Label column sm='6'>
              Plants Affected
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='Who is under attack?!'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='prevention'>
            <Form.Label column sm='6'>
              Preventive measures Taken
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

export default PestForm;
