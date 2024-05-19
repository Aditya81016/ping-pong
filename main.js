import { ball, bars, config, data } from "./config.js";
import setup from "./controllers/setup.js";
import start from "./controllers/start.js";
import randomDirection from "./helpers/randomDirection.js";

const canvas = document.querySelector("canvas");
const offset = config.barSpeed;

setup();

document.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  setup();
});

document.body.addEventListener("fullscreenchange", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  setup();
});

document.querySelector("button").addEventListener("click", () => {
  document.body.requestFullscreen();
  document.querySelector("button").style.display = "none";
});

document.body.addEventListener("click", () => {
  if (data.state === "playing" && config.enableRandomDirBindings === "true") {
    ball.direction = randomDirection();
    ball.speed = ball.speed * config.speedMultiplier;
  }
});

document.addEventListener("touchstart", () => {
  if (data.state === "initial") start();
});
document.addEventListener("touchmove", (e) => {
  for (let i = 0; i < e.touches.length; i++) {
    const touch = e.touches[i];
    if (touch.clientX < window.innerWidth / 2) {
      bars.yOf.red = touch.clientY - bars.height / 2;
    } else bars.yOf.blue = touch.clientY - bars.height / 2;
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && data.state === "initial") start();
  if (e.code === "KeyW") bars.offsetOf.red = -offset;
  if (e.code === "KeyS") bars.offsetOf.red = offset;
  if (
    (e.code === "KeyR" || e.code === "Numpad0") &&
    config.enableRandomDirBindings === "true"
  ) {
    ball.direction = randomDirection();
    ball.speed = ball.speed * config.speedMultiplier;
  }
  if (e.code === "ArrowUp") bars.offsetOf.blue = -offset;
  if (e.code === "ArrowDown") bars.offsetOf.blue = offset;
});
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && data.state === "initial") start();
  if (e.code === "KeyW") bars.offsetOf.red = -offset;
  if (e.code === "KeyS") bars.offsetOf.red = offset;
  if (e.code === "ArrowUp") bars.offsetOf.blue = -offset;
  if (e.code === "ArrowDown") bars.offsetOf.blue = offset;
});
document.addEventListener("keyup", (e) => {
  if (e.code === "KeyW") bars.offsetOf.red = 0;
  if (e.code === "KeyS") bars.offsetOf.red = 0;
  if (e.code === "ArrowUp") bars.offsetOf.blue = 0;
  if (e.code === "ArrowDown") bars.offsetOf.blue = 0;
});
