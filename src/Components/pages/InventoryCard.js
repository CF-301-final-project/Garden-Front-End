import React from 'react'
import Card from 'react-bootstrap/Card'

class InventoryCard extends React.Component {
   defaultImage = "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/54b4a9046130650002010000.jpg?1421125890"

  render() {
    const image = this.props.plant.image || this.defaultImage
    return (
      <Card style={{ width: '18rem' }} id={this.props.plant.id}>
        <Card.Img variant="top" src={image} alt={this.props.plant.plantName} /><Card.Body>
          <Card.Title>{this.props.plant.plantName}</Card.Title>
            <Card.Text>Plant Description: {this.props.plant.plantDescription}</Card.Text>
            <p>Light requirements: {this.props.plant.lightRequirements}</p>
            <p>Average days to first Harvest: {this.props.plant.medianDaysToFirstHarvest}</p>
       
        </Card.Body>
    </Card>
    )
  }
}

export default InventoryCard;