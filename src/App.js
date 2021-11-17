import React from "react";
import "./Styles/App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import AboutPage from "./Components/pages/AboutPage";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Inventory from "./Components/pages/InventoryPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garden: [],
      loggedIn: false,
      user: [],
      zipCode: [],
      weather: []
    };
  }


  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER}/crops`)
      .then(infoObj => infoObj.data)
      .then(data => this.setState({
        garden: data,
      }))
      .catch(err => console.log('error: ', err.message));
  }


  updateUser = (info) => {
    if (info) {
      this.setState({ user: info, loggedIn: true });
    }
  };

  getWeather = async () => {
    let weatherUrl = `http://localhost:3001/weather?postal_code=${this.state.zipCode}`
    try {
      let weatherData = await axios.get(weatherUrl)
      let weatherObject = weatherData.data
      this.setState({ weather: weatherObject})
    }
    catch (error) {
      console.log(`there was an error with the weather cell: ${error}`)
    };
  }

  render() {
    return (
      <>

        <Container className='text-center'>
          <Header loggedIn={this.state.loggedIn} user={this.state.user} updateUser={this.updateUser} />
          <Routes>
            <Route path='/' element={<Main loggedin={this.state.loggedIn} weather={this.state.weather} />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/inventory' element={<Inventory garden={this.state.garden}/>} />
          </Routes>

          <Container className='d-flex flex-row-reverse m-4' >
            <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
            </input>
            <Button variant="info" onClick={this.getWeather} >
              Get Weather!
            </Button>
          </Container>
          <Footer />
        </Container>
      </>
    );
  }
}

export default withAuth0(App);
