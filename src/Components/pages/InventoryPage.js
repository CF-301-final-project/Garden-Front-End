import React from "react";
import InventoryCard from "./InventoryCard";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Inventory extends React.Component {
  render() {
    const PlantCards = this.props.garden.map((plant, idx) => <InventoryCard plant={plant} id={idx}/>)
    return (
      <Container style={{minHeight: '600px'}}>
        <h1 className ='text-light'>Plants in the Garden</h1>
        <Row lg={4}>
        {PlantCards}
      </Row>
      </Container>
    );
  }
}

export default Inventory;
