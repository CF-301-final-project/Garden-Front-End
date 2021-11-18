import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

class PlantDisplay extends React.Component{
  render() {
    let date = '';
    if (this.props.plant.directSowDate) {
      const plantDate = this.props.plant.directSowDate;
      const d = new Date(plantDate);
      date = d.toLocaleDateString();
      // const sowDate = this.props.plant.directSowDate();
    }

    return (
        <Card style={{maxWidth: '20rem', maxHeight:'600px'}}>
        <Card.Title>{this.props.plant.plantName}</Card.Title>
        <Card.Body className='overflow-auto'>
        <Card.Text>Planted: {date}</Card.Text>
        <Card.Text>Family: {this.props.plant.plantFamily}</Card.Text>
        <Card.Text>Determinate: {this.props.plant?.determinate}</Card.Text>
        <Card.Text>Days to Maturity: {this.plant?.props ?? 'n/a'}</Card.Text>
        <Card.Text>Light: {this.props.plant?.lightRequirements ?? 'n/a'}</Card.Text>
        <Card.Text className='overflow-auto'>Details:{this.props.plant?.plantDescription ?? 'n/a'}</Card.Text>
        <Button size='sm' onClick={()=> this.props.editPlant(this.props.plant)}>Edit</Button>
        <Button size='sm' variant='warning' onClick={()=> this.props.deletePlant(this.props.plant)}>Delete</Button>

        </Card.Body>
        </Card>
      )
      }
  }


export default PlantDisplay;




