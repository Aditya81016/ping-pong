import randomDirection from "./helpers/randomDirection.js";

const params = window.location.search.substring(1).split("&");

const config = {
  ballMaxSpeed: 1000,
  ballMinSpeed: 500,
  barSpeed: 750,
  randomness: 1,
  deviation: 0.5, // on how much rad ball should deviate a bit randomly
  direction: randomDirection(), // initial direction of the ball
  interval: 2500, // interval before setting up a new game
  speedMultiplier: 1.1, // by how much speed should increase
  enableRandomDirBindings: "true", // enable/disable listeners to randomize ball's direction
};

params.forEach((para) => {
  const [key, val] = para.split("=");
  config[key] = val;

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
  radius: 25,
  speed: 500,
  direction: 0,
};

const bars = {
  height: 100,
  width: 10,
  xGap: 50,
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
