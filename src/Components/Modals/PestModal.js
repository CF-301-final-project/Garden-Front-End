import React from "react";
import Modal from "react-bootstrap/Modal";
import PestForm from "./PestForm";

class PestModal extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.togglePestModal}>
          <Modal.Header closeButton>
            <Modal.Title>Report Pest Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PestForm togglePestModal={this.props.togglePestModal} />
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PestModal;
