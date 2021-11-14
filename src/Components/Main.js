import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import CanvasGarden from "./CanvasGarden";
import PlantModal from "./Modals/PlantModal";
import axios from "axios";

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

  updatePlantItems = (canvasData) => {
    this.setState({ plantItems: [...this.state.plantItems, canvasData] });
  };

  submitPest = (data) => {
    console.log("main has pest data: ", data);
  };

  movePlant = (p) => {
    console.log(p);
    const { id } = p;
    // PUT REQUEST - update location
    axios.put(`${process.env.REACT_APP_SERVER}/crops/${id}`);
  };

  // Add Plant to Database and local State
  submitPlant = (formData) => {
    const plantFormData = formData;
    const newPlantData = plantFormData;
    const newPlantPos = this.state.plantItems[this.state.plantItems.length - 1];
    const newPlant = { ...newPlantData, ...newPlantPos };
    console.log(newPlant);
    this.setState({ plantItems: [...this.state.plantItems, newPlant] });

    axios.post(`${process.env.REACT_APP_SERVER}/crops`, newPlant);
  };

  render() {
    // console.log("Main props ", this.props);
    // console.log("Main State: ", this.state);
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
          movePlant={this.movePlant}
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
