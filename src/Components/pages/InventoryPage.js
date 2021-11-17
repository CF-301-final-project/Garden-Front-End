import React from "react";
import { Carousel } from "react-bootstrap";

class Inventory extends React.Component {
  render() {
    return (
      <>
        <h1>Inventory</h1>
        {this.props.garden.length > 0 ?
          <Carousel variant='dark' className='m-auto' >
            {this.props.garden.map((plant) => (
              <Carousel.Item class='text-light'>
                <img
                  className="d-block mx-auto img-fluid w-25"
                  src={plant.cropImage}
                  alt={plant.plantName}
                />
                <Carousel.Caption>
                  <h3 class='text-light'>PLant Name: {plant.plantName}</h3>
                  <p class='text-light'>Plant Description: {plant.plantDescription}</p>
                  <p class='text-light'>Light requirements: {plant.lightRequirements}</p>
                  <p class='text-light'>Average days to first Harvest: {plant.medianDaysToFirstHarvest}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          : <p>Sorry, no inventory available.</p>
        }
      </>
    );
  }
}

export default Inventory;