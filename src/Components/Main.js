import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import Weather from './Weather.js'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
      showPestModal: false,
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  togglePestModal = () => {
    this.setState({ showPestModal: !this.state.showPestModal });
  };

  render() {
    return (
      <>
        <h1>Main Component</h1>
        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        <PestButton togglePestModal={this.togglePestModal} />
        <Weather weather={this.props.weather} />
      </>
    );
  }
}

export default Main;
