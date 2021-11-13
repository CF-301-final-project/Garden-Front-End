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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      user: [],
      zipCode: [],
      weather: []
    };
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
<<<<<<< HEAD
    console.log('app.js - zip: ', this.state.zipCode);
    console.log('app.js - user ', this.state.user);

    return (
      <>

        <Container className='text-center'>
          <Header loggedIn={this.state.loggedIn} user={this.state.user} updateUser={this.updateUser} />
          <Container className='d-flex flex-row-reverse m-4' >
            <input placeholder="Enter Zip Code" onChange={(event) => this.setState({ zipCode: event.target.value })}>
            </input>
            <Button variant="info" onClick={this.getWeather} >
              Get Weather!
            </Button>
          </Container>
          <Routes>
            <Route path='/' element={<Main loggedin={this.state.loggedIn} weather={this.state.weather} />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <Footer />
        </Container>
      </>
=======
    // console.log(this.state);

    return (
      <Container className='text-center'>
        <Header loggedIn={this.state.loggedIn} user={this.state.user} updateUser={this.updateUser} />
        <Routes>
          <Route path='/' element={<Main loggedIn={this.state.loggedIn} />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <Footer />
      </Container>
>>>>>>> dev-branch
    );
  }
}

export default withAuth0(App);
