import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import Weather from './Weather.js'
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

  componentDidMount() {
    console.log("Component Mounted");
    this.getData()
  }

  getData = async () => {
    let db = await axios.get(`${process.env.REACT_APP_SERVER}/crops`)
    let data = db.data;
    console.log('Main-getData: ', data)
    this.setState({ plantItems: data })
  }

  targetPlant = (plant) => {
    console.log(plant)
  }

  updateMoved = async (plant) => {
    const id = plant._id;
    await axios.put(`${process.env.REACT_APP_SERVER}/crops/${id}`, plant)
  }

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


  // Add Plant to Database and local State
  submitPlant = async (formData) => {
    try {
      const newPlantData = formData;
      const newPlantPos = this.state.newestPlant;
      const newPlant = { ...newPlantData, ...newPlantPos };
      let response = await axios.post(`${process.env.REACT_APP_SERVER}/crops`, newPlant);

      // let response = await axios.post(`${process.env.REACT_APP_SERVER}/crops`, newPlantData);
      if (response.status === 200 && response.data) {
        const updatedPlant = { ...response.data, ...newPlantPos };
        const p = [...this.state.plantItems, updatedPlant]
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
        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        <h1>Garden Party</h1>
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
          // movePlant={this.movePlant}
          targetPlant={this.targetPlant}
          togglePlantModal={this.togglePlantModal}
          plantItems={this.state.plantItems}
          loggedIn={this.props.loggedIn}
          updateMoved={this.updateMoved}
        />
        <div>
          <PestButton togglePestModal={this.togglePestModal} />
        </div>
        <PestModal
          showModal={this.state.showPestModal}
          togglePestModal={this.togglePestModal}
          submitPest={this.submitPest}
        />
          <Weather weather={this.props.weather} />
      </>
    );
  }
}

export default Main;
