import React from "react";
import Modal from "react-bootstrap/Modal";
import EditPlantForm from "./EditPlantForm";

class EditPlantModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showEditPlantModal} onHide={this.props.toggleEditPlantModal}>
          <Modal.Header closeButton>
            <Modal.Title>Report Plant Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditPlantForm toggleEditPlantModal={this.props.toggleEditPlantModal} submitPlant={this.props.submitPlant} updatePlant={this.props.updatePlant} />
          </Modal.Body>
        </Modal>
        <EditPlantForm />
      </>
    );
  }
}

export default EditPlantModal;
