import React from "react";
import "../Styles/canvas.css";

const CreateImageElement = () => {
  return <img id='pic' alt='plant' style={{ display: "none" }} src='./images/plant.webp' width={30} height={30}></img>;
};

//https://via.placeholder.com/50

class PlantCanvas {
  constructor(x, y, ctx) {
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

    this.renderImage = (x,y) => {
      ctx.save();
      let image = document.getElementById("pic");
     ctx.drawImage(image, x - 10, y - 10, 30, 30);
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
      canvasPlants: []
    };
  }

  // wait for canvas element to render
  componentDidMount() {
    console.log('Canvas Mounted');
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    this.setState({
      canvas: canvas,
      ctx: ctx,
      canvasHeight: "600px",
      canvasWidth: "800px",
      canvasPlants: this.props.plantItems
    });
    setTimeout(()=> {
      this.drawData(this.props.plantItems) }
      , 500);
    // this.drawData(this.props.plantItems)

  }

  // componentDidUpdate() {
  //     this.drawData(this.props.plantItems);
  // }

  targetHit = (e) => {
    const pos = this.getMousePos(e);
    let plantTarget;
    this.props.plantItems.forEach((plant, idx) => {
      // Detect object in canvas
      if (
        pos.x > plant.x - 0.5 * plant.width &&
        pos.x < plant.x + plant.width &&
        pos.y > plant.y - 0.5 * plant.width &&
        plant.y < plant.y + plant.height
      ) {
        plantTarget = plant;
        this.props.targetPlant(plantTarget);
      }
    });
    return plantTarget;
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
    if (!arr) {
      console.log("no data to draw");
    } else {
      // Clear Canvas
      this.clear();
      
      arr.forEach((plant) => {
        plant.renderImage(plant.x, plant.y);
      });
    }
  };


  drawData = (arr) => {
    if (!arr) {
      console.log('no data');
    }
    arr.forEach((plant) => {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight)
      let image = document.getElementById("pic");
      ctx.drawImage(image, plant.x - 10, plant.y - 10, 30, 30);
    })
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

  // Grab individual item in canvas
  mouseDown = (e) => {
    e.preventDefault();
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
      }
    });
  };

  // Deactivate mouse Move toggle
  mouseUp = (e) => {
    this.setState({ movingTime: false });
    let p = this.targetHit(e);
    if (p) {
      const copyProps = this.props.plantItems;
      const updatePlant = copyProps.filter((plant) => plant.isDragging === true)[0];
      updatePlant.isDragging = false;
      this.props.updateMoved(p);
    }
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
      // const plantArr = this.props.plantItems;
      let movingPlant = plantArr.filter((p) => p.isDragging === true);
      // let movingPlant = this.props.plantItems.filter((p) => p.isDragging === true);

      // console.log(movingPlant[0].x, movingPlant[0].y);
      // set plant coordinates to dragged to position
      movingPlant[0].x = dx;
      movingPlant[0].y = dy;
      
      // this.draw(this.props.plantItems);
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 800, 600)
      setInterval(this.drawData(this.props.plantItems),10);
      // this.draw(this.props.plantItems);
    }
  };

  addPlant = (e) => {
    const pos = this.getMousePos(e);
    const duplicateCheck = this.targetHit(e);

    if (!duplicateCheck) {
      this.props.togglePlantModal();

      const plantArr = [...this.props.plantItems];
      // console.log(plantArr)
      const p = new PlantCanvas(pos.x, pos.y, this.state.ctx);
      this.props.updateNewestPlant(p);
      
      plantArr.push(p);
      // console.log("addPlant arr: ", plantArr);
      this.drawData(plantArr)
      // this.draw(this.props.plantArr);
      // this.draw(this.props.plantItems)
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
        <CreateImageElement />
        <canvas
          id='canvas'
          width={this.state.canvasWidth}
          height={this.state.canvasHeight}
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onMouseUp={this.mouseUp}
          onDoubleClick={this.addPlant}
          onDrop={this.drop}
          onDragOver={this.allowDrop}
        ></canvas>
      </>
    );
  }
}

export default CanvasGarden;

// drop = (e) => {
//   e.preventDefault();
//   const ctx = this.state.ctx;
//   const pos = this.getMousePos(e);
//   const data = e.dataTransfer.getData("text/plain");
//   const dropElement = document.getElementById(data);
//   ctx.drawImage(dropElement, pos.x, pos.y);
// };
