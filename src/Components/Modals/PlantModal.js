import React from "react";
import Modal from "react-bootstrap/Modal";
import PlantForm from "./PlantForm";

class PlantModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showTestPlantModal} onHide={this.props.togglePlantModal}>
          <Modal.Header closeButton>
            <Modal.Title>Report Plant Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PlantForm togglePlantModal={this.props.togglePlantModal} submitPlant={this.props.submitPlant} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PlantModal;
