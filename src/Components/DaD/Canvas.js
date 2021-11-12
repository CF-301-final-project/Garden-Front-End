import React from "react";
import "../../Styles/canvas.css";
import DragItem from "./DragItem";

const plantObj = function (x, y, ctx) {
  this.x = x;
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.isDragging = false;
  this.render = () => {
    ctx.save();

    ctx.beginPath();
    ctx.rect(this.x - 10, this.y - 10, this.width, this.height);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 5;
  };
};

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
        let p = new plantObj(plant.x, plant.y, this.state.ctx);
        p.render();
      });
    }
  }

  // MOUSE EVENTS
  // Mouse Coordinates in Canvas
  getMousePos = (e) => {
    // const canvas = document.querySelector("canvas");
    const canvasRect = this.state.canvas.getBoundingClientRect();
    const dropX = e.clientX - canvasRect.left;
    const dropY = e.clientY - canvasRect.top;
    return { x: dropX, y: dropY };
  };

  processEvent = (e) => {
    if (e.touches) {
      console.log("Touch");
    }
  };

  isHit = (item, x, y) => {
    console.log(x);
  };

  mouseDown = (e) => {
    e.preventDefault();
    const pos = this.getMousePos(e);
    this.state.items.forEach((i) => this.isHit(i, pos.x, pos.y));

    // // //
    this.processEvent(e);
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

  drawBox = (e) => {
    const pos = this.getMousePos(e);
    // this.plantObj(pos.x, pos.y);
    this.props.updatePlantItems(pos);
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  render() {
    // console.log("Canvas props ", this.props);
    // console.log("Canvas State: ", this.state);
    return (
      <>
        <DragItem id='firstItem' />
        <DragItem id='secondItem' />
        <canvas
          width='800px'
          height='600px'
          id='canvas'
          onClick={this.mouseDown}
          onDoubleClick={this.drawBox}
          onDrop={this.drop}
          onDragOver={this.allowDrop}
        ></canvas>
      </>
    );
  }
}

export default CanvasGarden;
