import React from "react";
import Modal from "react-bootstrap/Modal";
import PlantForm from "./PlantForm";

class EditPlantModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showEditPlantModal} onHide={this.props.toggleEditPlantModal}>
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

export default EditPlantModal;
