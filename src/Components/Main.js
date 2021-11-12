import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import DaDTest from "./DaD/DaDTest";
import CanvasGarden from "./DaD/Canvas";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
      showPestModal: false,
      plantItems: [],
    };
  }

  // componentDidMount() {
  //   console.log("Component Mounted");
  // }

  togglePestModal = () => {
    this.setState({ showPestModal: !this.state.showPestModal });
  };

  updatePlantItems = (data) => {
    this.setState({ plantItems: [...this.state.plantItems, data] });
  };

  render() {
    console.log("Main props ", this.props);
    return (
      <>
        <h1>Garden Land</h1>
        {/* <DaDTest /> */}

        <CanvasGarden
          plantItems={this.state.plantItems}
          updatePlantItems={this.updatePlantItems}
          loggedIn={this.props.loggedIn}
        />

        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        <div>
          <PestButton togglePestModal={this.togglePestModal} />
        </div>
      </>
    );
  }
}

export default Main;
