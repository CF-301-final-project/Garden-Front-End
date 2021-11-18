import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import Weather from './Weather.js'
import CanvasGarden from "./CanvasGarden";
import PlantModal from "./Modals/PlantModal";
import axios from "axios";
import NotLoggedIn from './NotLoggedIn';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PlantDetails from "./PlantDetails";

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
      newestPlant: {},
      targetPlant: {}
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
    this.props.getGarden(data);
  }

  targetPlant = (plant) => {
    this.setState({ targetPlant: plant })
    // console.log('Target plant: ', plant)
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
    console.log("Main props ", this.props);
    // console.log("Main State: ", this.state.plantItems);
    return (
      <Container>
        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        {this.state.showTestPlantModal && (
          <PlantModal
          showTestPlantModal={this.state.showTestPlantModal}
          togglePlantModal={this.togglePlantModal}
          submitPlant={this.submitPlant}
          />
          )}

        {this.props.loggedin && 
        <>
        <h4>Here is your garden</h4>
        <p>click to see OR double click to add.  Feel free to rearrange </p>
        
        <Row>
          <Col lg={3}>
        <PlantDetails plant={this.state.targetPlant}/>
          </Col>
        
          <Col lg={4}>
        <CanvasGarden
          updateNewestPlant={this.updateNewestPlant}
          // movePlant={this.movePlant}
          targetPlant={this.targetPlant}
          togglePlantModal={this.togglePlantModal}
          plantItems={this.state.plantItems}
          loggedIn={this.props.loggedIn}
          updateMoved={this.updateMoved}
          ></CanvasGarden> 
          <div>
            <PestButton togglePestModal={this.togglePestModal} />
          </div>
          </Col>

          <Row>

          <Container className='d-flex flex-row-reverse m-4' >
          <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
          </input>
          <Button variant="info" onClick={this.getWeather} >
            Get Weather!
          </Button>
        </Container>
        <Weather weather={this.state.weather} />
          </Row>
     
        </Row>
          </>}
        {!this.props.loggedin && <NotLoggedIn />}
        <PestModal
          showModal={this.state.showPestModal}
          togglePestModal={this.togglePestModal}
          submitPest={this.submitPest}
          /> 
      </Container>
    );
  }
}

export default Main;
