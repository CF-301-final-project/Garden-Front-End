import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class EditPlantModal extends React.Component{
  constructor(props) {
    super(props) 
    this.state = {
      editPlant: {},
    }
  }
  
 render() {
   return (

     
     <Container className='mb-3'>
  <Form className='text-left' onSubmit={this.handleSubmit}>
    <Form.Group as={Row} className='mb-2' controlId='plantName'>
      <Form.Label column sm='6'>
        Plant Name
      </Form.Label>
      <Col sm='6'>
        <Form.Control type='text' placeholder='ex: Dancing with Smurfs'></Form.Control>
      </Col>
    </Form.Group>

    {/* <Form.Group as={Row} className='mb-2' controlId='plantFamily'>
      <Form.Label column sm='6'>
      Plant Family
      </Form.Label>
      <Col sm='6'>
      <Form.Control type='text' placeholder='ex: Tomato'></Form.Control>
      </Col>
    </Form.Group> */}

   <Form.Group as={Row} className='mb-2' controlId='plantFamily'>
      <Form.Label column sm='6'>
        Plant Family
      </Form.Label>
      <Col sm='6'>
        <Form.Select>
          <PlantFamilyOptions />
        </Form.Select>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className='mb-2' controlId='determinate'>
      <Col>
        <Form.Label column sm='6'>
          Determinate
        </Form.Label>
      </Col>
      <Col>
        <Form.Select>
          <option>no</option>
          <option>yes</option>
        </Form.Select>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className='mb-2' controlId='directSowDate'>
      <Form.Label column sm='6'>
        Date Planted
      </Form.Label>
      <Col sm='6'>
        <Form.Control type='date'></Form.Control>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className='mb-2' controlId='daysToMaturity'>
      <Form.Label column sm='6'>
        Days to Maturity
      </Form.Label>
      <Col sm='6'>
        <Form.Control type='number' min={20} max={300} placeholder={75}></Form.Control>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className='mb-2' controlId='lightRequirements'>
      <Col>
        <Form.Label column sm='6'>
          Light Requirements
        </Form.Label>
      </Col>
      <Col>
        <Form.Select>
          <option>Full Sun</option>
          <option>Partial Sun</option>
          <option>Shade OK</option>
        </Form.Select>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className='mb-2' controlId='fertilizing'>
      <Form.Label column sm='6'>
        Fertilizer Preference
      </Form.Label>
      <Col sm='6'>
        <Form.Control type='test' placeholder='ex: bone meal or NPK'></Form.Control>
      </Col>
    </Form.Group>

    <Button type='submit'>Submit</Button>
  </Form>
</Container>
  )
 } 
}


export default EditPlantModal;