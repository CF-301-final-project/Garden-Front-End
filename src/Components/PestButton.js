import React from "react";
import Button from "react-bootstrap/Button";

class PestButton extends React.Component {
  render() {
    return (
      <>
        <Button onClick={this.props.togglePestModal}>Report Pests</Button>
      </>
    );
  }
}

export default PestButton;
