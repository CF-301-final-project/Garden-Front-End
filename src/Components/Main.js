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
      newestPlant: {},
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

  submitPest = (data) => {
    console.log("main has pest data: ", data);
  };

  updateNewestPlant = (plantObj) => {
    this.setState({ newestPlant: plantObj });
  };

  movePlant = (data) => {
    const id = data._id;
    const plantInMotion = this.state.plantItems.filter((p, idx) => p._id === id);
    console.log(plantInMotion)
  }

  // Add Plant to Database and local State
  submitPlant = async (formData) => {
    try {
      const newPlantData = formData;
      const newPlantPos = this.state.newestPlant;
      // const newPlant = { ...newPlantData, ...newPlantPos };

      let response = await axios.post(`${process.env.REACT_APP_SERVER}/crops`, newPlantData);
      if (response.status === 200 && response.data) {
        const updatedPlant = { ...response.data, ...newPlantPos };
        this.setState({ plantItems: [...this.state.plantItems, updatedPlant] });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // console.log("Main props ", this.props);
    // console.log("Main State: ", this.state.plantItems);
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
          updateNewestPlant={this.updateNewestPlant}
          movePlant={this.movePlant}
          togglePlantModal={this.togglePlantModal}
          plantItems={this.state.plantItems}
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
