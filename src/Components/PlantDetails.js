import React from 'react';
import Card from 'react-bootstrap/Card';


class PlantDetails extends React.Component{
  render() {

    const { plantName, daysToMaturity, plantFamily, lightRequirements, determinate, directSowDate, plantDescription } = this.props.plant;

    const d = new Date(directSowDate);
    const date = d.toLocaleDateString();

    return (
      <>
      {plantName && (<Card style={{ maxWidth: '20rem', maxHeight: '600px', minHeight: '600px'}} className='overflow-auto'>
          <Card.Title>{plantName}</Card.Title>
          <Card.Subtitle>Family: {plantFamily}</Card.Subtitle>
          <Card.Text>Date Planted: {date}</Card.Text>
          <Card.Text>Days to Mature: {daysToMaturity}</Card.Text>
          <Card.Text>Lighting: {lightRequirements}</Card.Text>
          <Card.Text>{determinate}</Card.Text>
          <Card.Body className='overflow-auto'>Details: {plantDescription}</Card.Body>

        </Card>)
  }   </>
      )
  }
}

export default PlantDetails;