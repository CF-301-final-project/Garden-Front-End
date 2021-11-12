import React from "react";
import "../../Styles/canvas.css";
import DragItem from "./DragItem";

class CanvasGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      canvas: "",
      ctx: "",
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    this.setState({
      canvas: canvas,
      ctx: ctx,
    });
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.plantItems.forEach((plant) => {
        this.boxImage(plant.x, plant.y);
      });
    }
  }

  // Mouse Coordinates in Canvas
  getMousePos = (e) => {
    const canvas = document.querySelector("canvas");
    const canvasRect = canvas.getBoundingClientRect();
    const dropX = e.clientX - canvasRect.left;
    const dropY = e.clientY - canvasRect.top;
    return { x: dropX, y: dropY };
  };

  drop = (e) => {
    e.preventDefault();
    const ctx = this.state.ctx;
    const pos = this.getMousePos(e);
    const data = e.dataTransfer.getData("text/plain");
    console.log(data);
    const dropElement = document.getElementById(data);
    ctx.drawImage(dropElement, pos.x, pos.y);
  };

  boxImage = (x, y) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 5;
  };

  drawBox = (e) => {
    const pos = this.getMousePos(e);
    // this.boxImage(pos.x, pos.y);
    this.props.updatePlantItems(pos);
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  clickHandler = (e) => {
    const { x, y } = this.getMousePos(e);
    console.log(x, y);
  };

  render() {
    console.log("Canvas props ", this.props);
    return (
      <>
        <DragItem id='firstItem' />
        <DragItem id='secondItem' />
        <canvas
          width='800px'
          height='600px'
          id='canvas'
          onClick={this.clickHandler}
          onDoubleClick={this.drawBox}
          onDrop={this.drop}
          onDragOver={this.allowDrop}
        ></canvas>
      </>
    );
  }
}

export default CanvasGarden;
