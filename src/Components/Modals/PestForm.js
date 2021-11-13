import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class PestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const pestSubmission = {
      pestName: e.target.pestName.value,
      dateSpotted: e.target.dateSpotted.value,
      plantsAttacked: e.target.plantsAttacked.value,
      preventiveMeasure: e.target.preventiveMeasure.value,
    };
    console.log(pestSubmission);
    this.props.togglePestModal();
    this.props.submitPest(pestSubmission);
  };

  render() {
    return (
      <Container className='mb-3'>
        <Form className='text-left' onSubmit={this.handleSubmit}>
          <Form.Group as={Row} className='mb-2' controlId='pestName'>
            <Form.Label column sm='6'>
              Pest Name
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='What type of pest?'></Form.Control>
            </Col>
          </Form.Group>

          {/* <Form.Group as={Row} className='mb-2' controlId='pestFamily'>
            <Form.Label column sm='6'>
              Pest Family
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='Science Stuff?'></Form.Control>
            </Col>
          </Form.Group> */}

          <Form.Group as={Row} className='mb-2' controlId='dateSpotted'>
            <Form.Label column sm='6'>
              Date Spotted
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='date'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='plantsAttacked'>
            <Form.Label column sm='6'>
              Plants Affected
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='Who is under attack?!'></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-2' controlId='preventiveMeasure'>
            <Form.Label column sm='6'>
              Preventive measures Taken
            </Form.Label>
            <Col sm='6'>
              <Form.Control type='text' placeholder='optional'></Form.Control>
            </Col>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default PestForm;

// MONGOOSE SCHEMA
// const pestSchema = new mongoose.Schema({
//   pestName: { type: String }, x
//   pestFamily: { type: String },
//   dateSpotted: { type: Date },
//   weather: { type: Object },
//   plantsAttacked: { type: Array },
//   preventiveMeasure: { type: String },
// });
