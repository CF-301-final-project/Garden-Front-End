import React from 'react';
import Card from 'react-bootstrap/Card';


class PlantDetails extends React.Component{
  render() {
    const { plantName, daysToMaturity, plantFamily, lightRequirements, determinate, directSowDate, plantDescription } = this.props.plant;
    return (
      <>
      {plantName && (<Card style={{ maxWidth: '20rem', maxHeight: '600px', minHeight: '600px'}} className='overflow-auto'>
          <Card.Title>{plantName}</Card.Title>
          <Card.Subtitle>{plantFamily}</Card.Subtitle>
          <Card.Text>{daysToMaturity}</Card.Text>
          <Card.Text>{lightRequirements}</Card.Text>
          <Card.Text>Date Planted: {directSowDate}</Card.Text>
          <Card.Text>Determinate: {determinate}</Card.Text>
          <Card.Body className='overflow-auto'>Details: {plantDescription}</Card.Body>

        </Card>)
  }   </>
      )
  }
}

export default PlantDetails;