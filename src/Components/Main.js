import React from "react";
import PestModal from "./Modals/PestModal";
import PestButton from "./PestButton";
import DaDTest from "./DaD/DaDTest";

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
        <h1>Garden Action</h1>
        <DaDTest />
        <PestModal showModal={this.state.showPestModal} togglePestModal={this.togglePestModal} />
        <PestButton togglePestModal={this.togglePestModal} />
      </>
    );
  }
}

export default Main;
