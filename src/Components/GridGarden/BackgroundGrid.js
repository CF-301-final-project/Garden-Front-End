import React from "react";
import styled from "styled-components";
import Draggable from "../DaD/Draggable";
import Droppable from "../DaD/Droppable";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  background-color: #98f082b9;
  border: 1px dashed black;
  grid-template-columns: repeat(50, 20px);
  grid-template-rows: repeat(30, 22px);
`;

const droppableStyle = {};

const draggable = {
  width: "20px",
  height: "20px",
  margin: "10px",
  border: "1px solid black",
};

class BackgroundGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridItems: [],
    };
  }

  componentDidMount() {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push({ id: i });
    }
    this.setState({ gridItems: arr });
  }

  render() {
    const GridItems = this.state.gridItems.map((i, idx) => (
      <Droppable id={idx.toString() + "drop"} style={droppableStyle}>
        <Draggable id={i.id} style={draggable}></Draggable>
      </Droppable>
    ));

    return (
      <>
        <Wrapper>{GridItems}</Wrapper>
      </>
    );
  }
}

export default BackgroundGrid;
