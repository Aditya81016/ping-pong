import { ball } from "../config.js";

export default function renderBall() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#eee";
  ctx.beginPath();
  ctx.ellipse(
    ball.pos.x,
    ball.pos.y,
    ball.radius,
    ball.radius,
    0,
    0,
    Math.PI * 2
  );
  ctx.fill();
}
