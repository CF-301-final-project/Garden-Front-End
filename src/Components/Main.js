import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Weather from './Weather.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
      showPestModal: false,
      zipCode: [],
      weather: []
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  togglePestModal = () => {
    this.setState({ showPestModal: !this.state.showPestModal });
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
      this.setState({ errorCode: error.message })
      this.setState({ errorAlert: true })

    };
  }

  render() {
    return (
      <>
        <h1>Main Component</h1>
        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        <PestButton togglePestModal={this.togglePestModal} />

        
        <Container className='d-flex flex-row-reverse m-4' > 
          <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
          </input>
          <Button variant="info" onClick={this.getWeather} >
            Get Weather!
          </Button>
        </Container>

        <Weather weather={this.state.weather}/>
      </>
    );
  }
}

export default Main;
