import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import Weather from './Weather.js'
import CanvasGarden from "./CanvasGarden";
import PlantModal from "./Modals/PlantModal";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
      showPestModal: false,
      showTestPlantModal: false,
      plantItems: [],
      zipCode: [],
      weather: [],
      newestPlant: {}
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

  // movePlant = (data) => {
  //   const id = data._id;
  //   const plantInMotion = this.state.plantItems.filter((p, idx) => p._id === id);
  //   // console.log(plantInMotion)
  // }

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

  getWeather = async () => {
    let weatherUrl = `http://localhost:3001/weather?postal_code=${this.state.zipCode}`
    try {
      let weatherData = await axios.get(weatherUrl)
      let weatherObject = weatherData.data
      this.setState({ weather: weatherObject })
    }
    catch (error) {
      console.log(`there was an error with the weather cell: ${error}`)
    };
  }

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

        <Container className='d-flex flex-row-reverse m-4' >
          <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
          </input>
          <Button variant="info" onClick={this.getWeather} >
            Get Weather!
          </Button>
        </Container>
        <Weather weather={this.state.weather} />
      </>
    );
  }
}

export default Main;
