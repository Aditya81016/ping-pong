import clearCanvas from "../helpers/clearCanvas.js";
import renderBall from "../helpers/renderBall.js";
import renderBars from "../helpers/renderBars.js";

export default function render() {
  clearCanvas();

  renderBall();
  renderBars();
}
