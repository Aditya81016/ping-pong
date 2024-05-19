import { data } from "../config.js";
import calculate from "./calculate.js";
import render from "./render.js";

export default function start() {
  data.state = "playing";
  document.getElementById("label").style.display = "none";

  function loop(timeSpent) {
    if (data.state === "playing") {
      data.time.skip = timeSpent - data.time.spent;
      data.time.spent = timeSpent;

      if (data.time.skip > 0) {
        calculate();
        render();
      }
      requestAnimationFrame(loop);
    }
  }
  loop();
}
