import { ball, bars, config, data } from "../config.js";
import render from "./render.js";

export default function setup() {
  const canvas = document.querySelector("canvas");
  const header = document.querySelector("header");
  const label = document.getElementById("label");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  label.innerHTML = "Press <code>Enter</code> to start";
  label.style.display = "block";
  label.style.color = "var(--foreground)";

  data.state = "initial";

  ball.speed = config.ballMinSpeed;
  ball.pos = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  ball.direction = config.direction;

  bars.yOf.red = window.innerHeight / 2 - bars.height / 2;
  bars.yOf.blue = window.innerHeight / 2 - bars.height / 2;

  header.children.namedItem("red").textContent = data.scores.red;
  header.children.namedItem("blue").textContent = data.scores.blue;

  render();
}
