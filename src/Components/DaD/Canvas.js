import React from "react";
import "../../Styles/canvas.css";

class Plant {
  constructor(x, y, ctx, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.isDragging = false;

    // Draw item into canvas
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

class CanvasGarden extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: "",
      ctx: "",
      movingTime: false,
      startX: 0,
      startY: 0,
    };
  }

  // wait for canvas element to render
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

  // Mouse Coordinates in Canvas
  getMousePos = (e) => {
    // const canvas = document.querySelector("canvas");
    const canvasRect = this.state.canvas.getBoundingClientRect();
    const dropX = e.clientX - canvasRect.left;
    const dropY = e.clientY - canvasRect.top;
    return { x: dropX, y: dropY };
  };

  // Grab individual item in canvas
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
        // Set starting coordinates for this obj
        this.setState({ movingTime: true });
        plant.isDragging = true;

        // Get plant to be moved plant in state ????
        let plantArr = this.props.plantItems;
        let movingPlant = plantArr[idx];
        console.log("mousedown move plant", movingPlant.isDragging);
      }
    });
  };

  // Deactivate mouse Move toggle
  mouseUp = (e) => {
    // console.log("mouse up");
    this.setState({ movingTime: false });
  };

  deactivateDrag = (plant) => {
    plant.isDragging = false;
  };

  // clear canvas
  // used in animation and for testing
  clear = () => {
    const ctx = this.state.ctx;
    ctx.clearRect(0, 0, 800, 600);
  };

  // Draw elements from storage on canvas.
  // Stored items render themselves.
  draw = (arr) => {
    // Clear Canvas
    this.clear();

    arr.forEach((plant) => {
      plant.render();
    });
  };

  mouseMove = (e) => {
    if (this.state.movingTime) {
      // console.log("mouse move");
      e.preventDefault();
      e.stopPropagation();

      let m = this.getMousePos(e);
      let sX = this.state.startX;
      let sY = this.state.startY;

      // dragged to position
      let dx = m.x - sX;
      let dy = m.y - sY;

      // Find draggable plant
      const plantArr = this.props.plantItems;
      let movingPlant = plantArr.filter((p) => p.isDragging === true);

      // set plant coordinates to dragged to position
      movingPlant[0].x = dx;
      movingPlant[0].y = dy;

      // requestAnimationFrame(this.draw(plantArr));
      setInterval(this.draw(plantArr), 20);
      // Draw with updated location
      movingPlant.isDragging = false;
    }
  };

  drop = (e) => {
    e.preventDefault();
    const ctx = this.state.ctx;
    const pos = this.getMousePos(e);
    const data = e.dataTransfer.getData("text/plain");
    const dropElement = document.getElementById(data);
    ctx.drawImage(dropElement, pos.x, pos.y);
  };

  addPlant = (e) => {
    const pos = this.getMousePos(e);
    const duplicateCheck = () => {
      let check = false;
      this.props.plantItems.forEach((plant, idx) => {
        // Detect object in canvas
        if (
          pos.x > plant.x - 0.5 * plant.width &&
          pos.x < plant.x + plant.width &&
          pos.y > plant.y - 0.5 * plant.width &&
          plant.y < plant.y + plant.height
        ) {
          check = true;
          console.warn("Object creation overlap");
        }
      });
      return check;
    };
    if (duplicateCheck() == false) {
      const plantArr = this.props.plantItems;
      const id = 100 + pos.x;
      const p = new Plant(pos.x, pos.y, this.state.ctx, id);
      this.props.updatePlantItems(p);
      plantArr.push(p);
      this.draw(plantArr);
    }
  };

  allowDrop = (e) => {
    e.preventDefault();
  };

  render() {
    // console.log("Canvas props ", this.props.plantItems);
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
        <button onClick={this.clear}>Clear</button>
      </>
    );
  }
}

export default CanvasGarden;
