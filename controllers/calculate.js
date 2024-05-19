import { ball, bars, config, data } from "../config.js";
import range from "../helpers/range.js";
import setup from "./setup.js";

export default function calculate() {
  const label = document.getElementById("label");
  // update position of bars
  bars.yOf.red = range(
    bars.yOf.red + (bars.offsetOf.red * data.time.skip) / 1000,
    0,
    window.innerHeight - bars.height
  );
  bars.yOf.blue = range(
    bars.yOf.blue + (bars.offsetOf.blue * data.time.skip) / 1000,
    0,
    window.innerHeight - bars.height
  );

  // calculate new direction of ball
  // if ball hits a bar
  if (
    (ball.pos.y >= bars.yOf.red - ball.radius &&
      ball.pos.y <= bars.yOf.red + bars.height + ball.radius &&
      ball.pos.x <= bars.xGap + bars.width + ball.radius) ||
    (ball.pos.y >= bars.yOf.blue - ball.radius &&
      ball.pos.y <= bars.yOf.blue + bars.height + ball.radius &&
      ball.pos.x >= window.innerWidth - bars.xGap - bars.width - ball.radius)
  ) {
    ball.direction *= -1 + (Math.random() * config.randomness * Math.PI) / 8;
    ball.speed = ball.speed * config.speedMultiplier;
  }

  // if ball hits red side
  if (ball.pos.x === ball.radius) {
    data.state = "over";
    data.scores.blue += 1;
    label.innerText = "Blue Won!";
    label.style.display = "block";
    label.style.color = "var(--blue)";
    setTimeout(() => {
      setup();
    }, config.interval);
  }

  // if ball hits blue side
  if (ball.pos.x === window.innerWidth - ball.radius) {
    data.state = "over";
    data.scores.red += 1;
    label.innerText = "Red Won!";
    label.style.display = "block";
    label.style.color = "var(--red)";
    setTimeout(() => {
      setup();
    }, config.interval);
  }

  // if ball hits ground
  if (
    ball.pos.y === ball.radius ||
    ball.pos.y === window.innerHeight - ball.radius
  ) {
    // const x = Math.PI / ball.direction;
    // ball.direction = (x-1) * ball.direction;

    // if ball stuck
    if (
      Math.abs(Math.PI - ball.direction) < config.deviation ||
      Math.abs(ball.direction) < config.deviation
    )
      ball.direction =
        Math.PI -
        ball.direction -
        Math.random() * (Math.random() > 0.5 ? -1 : 1) * config.randomness;
    else ball.direction = Math.PI - ball.direction;

    ball.speed = range(ball.speed, ball.speed, config.ballMaxSpeed);
  }

  // update ball pos
  ball.pos = {
    x: range(
      ball.pos.x +
        (Math.sin(ball.direction) * ball.speed * data.time.skip) / 1000,
      ball.radius,
      window.innerWidth - ball.radius
    ),
    y: range(
      ball.pos.y +
        (Math.cos(ball.direction) * ball.speed * data.time.skip) / 1000,
      ball.radius,
      window.innerHeight - ball.radius
    ),
  };
}
