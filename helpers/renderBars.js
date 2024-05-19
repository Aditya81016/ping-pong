import { bars } from "../config.js";

export default function renderBars() {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "hsl(0, 70%, 60%)";
  ctx.fillRect(bars.xGap, bars.yOf.red, bars.width, bars.height);

  ctx.fillStyle = "hsl(220, 90%, 70%)";
  ctx.fillRect(
    window.innerWidth - bars.xGap - bars.width,
    bars.yOf.blue,
    bars.width,
    bars.height
  );
}
