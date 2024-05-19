# Ping Pong

A simple ping pong game made in vanilla javascript, html and css.
It uses HTML5 Canvas to render graphics.
This was a practise project I build within a day with no external help.

## HOW TO PLAY

1. Press Enter or touch the screen to start the game.
2. The goal is to not let ball hit your side of the wall.
3. Use W and S to move red bar and use Arrow Up and Arrow Down to move blue bar. In mobile you can simply use your finger to move the bars.
4. Clicking on screen, entering R or entering Keypad 0 triggers the ball change it's direction randomly but it will gain some speed too. You can use this tactically.

## CONFIGURATIONS

Using the query parameters in the url you can change some constants used in the game to customize the game as per your liking.
Available constants are:
| Key | Type | Default | Description |
| --- | ---- | ------- | ----------- |
| ballMaxSpeed | number | 1000 | the max speed ball can have |
| ballMinSpeed | number | 500 | the min speed ball can have |
| barSpeed | number | 750 | the speed of red and blue bars |
| randomness | 0 to 1 | 1 | randomness by which ball can deviate |
| deviation | radian | 0.5 | on how much rad ball should deviate a bit randomly |
| direction | degree | random | initial direction of the ball |
| interval | miliseconds | 2500 | interval before setting up a new game |
| speedMultiplier | number | 1.1 | by how much speed should increase |
| enableRandomDirBindings | boolean | true | enable/disable listeners to randomize ball's direction |

Eg: https://aditya81016.github.io/ping-pong?randomness=0&interval=1000&ballMinSpeed=1000&ballMaxSpeed=1000
