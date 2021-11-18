import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import EditPlantModal from './Modals/EditPlantModal';

const URL = process.env.REACT_APP_SERVER
class PlantDetails extends React.Component{

  handleEdit = () => {
    console.log('edit', this.props.plant)
    this.props.toggleEditPlantModal();
  }

  handleDelete = async () => {
    console.log('delete', this.props.plant);
    this.props.removePlant(this.props.plant);
  }

  handlePest = () => {
    console.log('pest', this.props.plant)
    this.props.togglePestModal();
  }


  render() {
    const { plantName, daysToMaturity, plantFamily, lightRequirements, determinate, directSowDate, plantDescription } = this.props.plant;
    const d = new Date(directSowDate);
    const date = d.toLocaleDateString();
    const dateToHarvest = new Date(directSowDate);
    dateToHarvest.setDate(dateToHarvest.getDate() + parseInt(daysToMaturity))

    return (
      <>
      {this.props.showEditPlantModal && < EditPlantModal updatePlant={this.props.updatePlant} toggleEditPlantModal={this.props.toggleEditPlantModal}/>}
      {plantName && (
      <>
      <Card style={{ maxWidth: '20rem', maxHeight: '600px', minHeight: '600px'}} className='overflow-auto'>
          <Nav >
            {/* <Button className='mb-2' onClick={this.handleEdit}>Edit</Button> */}
            <Button className='mb-2' onClick={this.handleDelete}>Delete</Button>
            <Button className='mb-2' onClick={this.handlePest}>Report Pest</Button>
          </Nav>
            <Card.Title>{plantName}</Card.Title>
            <Card.Subtitle>Family: {plantFamily}</Card.Subtitle>
            <Card.Text>Date Planted: {date}</Card.Text>
            <Card.Text>Days to Mature: {daysToMaturity}</Card.Text>
            <Card.Text>Expected Harvest Date: {dateToHarvest.toLocaleDateString()}</Card.Text>
            <Card.Text>Lighting: {lightRequirements}</Card.Text>
            <Card.Text>{determinate}</Card.Text>
            <Card.Body className='overflow-auto'>Details: {plantDescription}</Card.Body>
        </Card>
        </>)
  }   </>
      )
  }
}

export default PlantDetails;