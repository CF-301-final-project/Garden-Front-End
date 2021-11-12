import React from "react";
import "../../Styles/canvas.css";
import DragItem from "./DragItem";

class Plant {
  constructor(x, y, ctx, id) {
    this.id = id;
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
  }
}

let startX = 0;
let startY = 0;

class CanvasGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      canvas: "",
      ctx: "",
      movingTime: false,
    };
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    this.setState({
      canvas: canvas,
      ctx: ctx,
      canvasHeight: "600px",
      canvasWidth: "800px",
    });
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.plantItems.forEach((plant, idx) => {
        let p = new Plant(plant.x, plant.y, this.state.ctx, plant.id);
        p.render();
      });
    }
  }

  draw = () => {
    const ctx = this.state.ctx;
    // Clear Canvas
    ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);

    //Redraw Canvas
    this.props.plantItems.forEach((plant) => {
      this.drawImages(plant.x, plant.y, plant.width, plant.height, ctx);
    });
  };

  drawImages = (x, y, width, height, ctx) => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x - 10, y - 10, width, height);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 5;
  };

  // MOUSE EVENTS
  // Mouse Coordinates in Canvas
  getMousePos = (e) => {
    // const canvas = document.querySelector("canvas");
    const canvasRect = this.state.canvas.getBoundingClientRect();
    const dropX = e.clientX - canvasRect.left;
    const dropY = e.clientY - canvasRect.top;
    return { x: dropX, y: dropY };
  };

  mouseDown = (e) => {
    // console.log("mouse down");
    e.preventDefault();
    e.stopPropagation();
    const pos = this.getMousePos(e);
    this.props.plantItems.forEach((plant, idx) => {
      // Detect object in canvas
      if (
        pos.x > plant.x - 0.5 * plant.width &&
        pos.x < plant.x + plant.width &&
        pos.y > plant.y - 0.5 * plant.width &&
        plant.y < plant.y + plant.height
      ) {
        // Drag Object in Canvas
        this.setState({ movingTime: true });
        plant.isDragging = true;
        startX = plant.x;
        startY = plant.y;
        console.log(startX, startY);

        // update plant in state
        let plantArr = this.props.plantItems;
        let movingPlant = plantArr[idx];
        console.log(movingPlant);

        // Turn off Dragging
        plant.isDragging = false;
      }
    });
  };

  mouseUp = (e, plant) => {
    console.log("mouse up");
    this.setState({ movingTime: false });
  };

  mouseMove = (e) => {
    if (this.state.movingTime) {
      console.log("mouse move");
      e.preventDefault();

      let m = this.getMousePos(e);
      let dx = m.x - startX;
      let dy = m.y - startY;

      // // Reset start with current pos
      startX = m.x;
      startY = m.y;

      console.log(startX, startY);
    }
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

  addPlant = (e) => {
    const pos = this.getMousePos(e);
    const id = 100 + pos.x;
    const p = new Plant(pos.x, pos.y, this.state.ctx, id);
    this.props.updatePlantItems(p);
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  render() {
    // console.log("Canvas props ", this.props);
    // console.log("Canvas State: ", this.state);

    return (
      <>
        {/* <DragItem id='firstItem' />
        <DragItem id='secondItem' /> */}
        <canvas
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
          id='canvas'
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onMouseUp={this.mouseUp}
          onDoubleClick={this.addPlant}
          onDrop={this.drop}
          onDragOver={this.allowDrop}
        ></canvas>
        {/* <canvas id='ghostCanvas' width='800px'>
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
        </canvas> */}
      </>
    );
  }
}

export default CanvasGarden;
