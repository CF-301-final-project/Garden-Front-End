import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gardenState: {},
    };
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return (
      <>
        <h1>Main Component</h1>
      </>
    );
  }
}

export default Main;
