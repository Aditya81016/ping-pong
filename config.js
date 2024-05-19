import randomDirection from "./helpers/randomDirection.js";

const params = window.location.search.substring(1).split("&");

const config = {
  ballMaxSpeed: 1000,
  ballMinSpeed: 500,
  barSpeed: 750,
  randomness: 0,
  deviation: 0.5, // on how much rad ball should deviate a bit randomly
  direction: randomDirection(), // initial direction of the ball
  interval: 2500, // interval before setting up a new game
  speedMultiplier: 1.1, // by how much speed should increase
  enableRandomDirBindings: "true", // enable/disable listeners to randomize ball's direction
  ballRadius: 25, // radius of the ball
  barsHeight: 100, // height of the bars
  barsXGap: 100, // Gap between bars and screen ends
};

params.forEach((para) => {
  const [key, val] = para.split("=");
  if (isFinite(val)) config[key] = Number(val);
  else config[key] = val;

  if (key === "direction") config.direction = (val / 180) * Math.PI;
});

const data = {
  state: "initial",
  scores: {
    red: 0,
    blue: 0,
  },
  time: {
    spent: 0,
    skip: 0,
  },
};

const ball = {
  pos: {
    x: 0,
    y: 0,
  },
  radius: config.ballRadius,
  speed: 500,
  direction: 0,
};

const bars = {
  height: config.barsHeight,
  width: 10,
  xGap: config.barsXGap,
  yOf: {
    red: 0,
    blue: 0,
  },
  offsetOf: {
    red: 0,
    blue: 0,
  },
  get posOf() {
    return {
      red: { x: bars.xGap, y: bars.yOf.red },
      blue: { x: bars.xGap, y: bars.yOf.blue },
    };
  },
};

export { data, ball, bars, config };
