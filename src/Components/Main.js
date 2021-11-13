import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import CanvasGarden from "./CanvasGarden";
import PlantModal from "./Modals/PlantModal";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
      showPestModal: false,
      showTestPlantModal: false,
      plantItems: [],
    };
  }

  // componentDidMount() {
  //   console.log("Component Mounted");
  // }

  togglePestModal = () => {
    this.setState({ showPestModal: !this.state.showPestModal });
  };

  togglePlantModal = () => {
    this.setState({ showTestPlantModal: !this.state.showTestPlantModal });
  };

  updatePlantItems = (data) => {
    this.setState({ plantItems: [...this.state.plantItems, data] });
  };

  submitPest = (data) => {
    console.log("main has pest data: ", data);
  };

  submitPlant = (data) => {
    console.log("Main has plant data: ", data);
  };

  render() {
    // console.log("Main props ", this.props);
    console.log("Main State: ", this.state);
    return (
      <>
        <h1>Garden Land</h1>
        <p>double click to add a new plant</p>
        {this.state.showTestPlantModal && (
          <PlantModal
            showTestPlantModal={this.state.showTestPlantModal}
            togglePlantModal={this.togglePlantModal}
            submitPlant={this.submitPlant}
          />
        )}
        <CanvasGarden
          togglePlantModal={this.togglePlantModal}
          plantItems={this.state.plantItems}
          updatePlantItems={this.updatePlantItems}
          loggedIn={this.props.loggedIn}
        />
        <div>
          <PestButton togglePestModal={this.togglePestModal} />
        </div>
        <PestModal
          showModal={this.state.showPestModal}
          togglePestModal={this.togglePestModal}
          submitPest={this.submitPest}
        />
      </>
    );
  }
}

export default Main;
