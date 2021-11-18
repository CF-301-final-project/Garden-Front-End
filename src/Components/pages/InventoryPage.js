import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

class Inventory extends React.Component {
  render() {
    return (
      <>
        <h1>Plants in the Garden</h1>
        <Card style={{ width: '18rem' }}>
          {this.props.garden.map((plant) => (
            <><Card.Img variant="top" src={plant.cropImage} alt={plant.plantName} /><Card.Body>
              <Card.Title>{plant.plantName}</Card.Title>
              <Card.Text>
                <p class='text-light'>Plant Description: {plant.plantDescription}</p>
                <p class='text-light'>Light requirements: {plant.lightRequirements}</p>
                <p class='text-light'>Average days to first Harvest: {plant.medianDaysToFirstHarvest}</p>
              </Card.Text>
            </Card.Body></>
          ))}
        </Card>
      </>
    );
  }
}

export default Inventory;
