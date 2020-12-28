let GAME_WIDTH = 1000;
let GAME_HEIGHT = 500;

let SQUARE_SIZE = 10;
let WIDTH = GAME_WIDTH / SQUARE_SIZE;
let HEIGHT = GAME_HEIGHT / SQUARE_SIZE;

let play = true;

let food = { x:  ~~(Math.random() * WIDTH), y: ~~(Math.random() * HEIGHT) };
let snake = [ { x: 10, y: 10, direction: 2 } ];

// colors can be grayscale scalar or rgb array
let COLOR_SNAKE = [255, 0, 0]; 
let COLOR_SNAKE_HEAD = [155, 0, 255];
let COLOR_BG = [25, 225, 25];
let COLOR_FOOD = [255, 240, 22];

let COLOR_PAUSE = 170;
let COLOR_PAUSE_TEXT = [255, 0, 255];

let gameFont;

function preload() {
  gameFont = loadFont("./fonts/PressStart2P-Regular.ttf");
}

function setup() {
  frameRate(60);
  createCanvas(GAME_WIDTH, GAME_HEIGHT);
}

function draw() {
  if(play) {
    background(COLOR_BG);

    drawSnake();
    updateSnakePos();
    if (snake[0].x == food.x && snake[0].y == food.y) {
      resetFood(); 
      upgradeSnake();
    }
    drawFood();
  }
  else {
    pauseScreen();
  }
}


function keyPressed() {
  // the snake cant move to the inverse of the current direction
  switch(keyCode) {
    // ARROW KEYS
    case LEFT_ARROW:
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 0;
      }
      break;
    case RIGHT_ARROW:
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 2;
      }
      break;
    case UP_ARROW:
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 1;
      }
      break;
    case DOWN_ARROW:
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 3;
      }
      break;
    // AWSD KEYS
    case 65: // 'a' key
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 0;
      }
      break;
    case 68: // 'd' key
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 2;
      }
      break;
    case 87: // 'w' key
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 1;
      }
      break;
    case 83: // 's' key
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 3;
      }
      break;
    // VIM KEYS
    case 72: // 'h'
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 0;
      }
      break;
    case 76: // 'l'
      if (snake[0].direction != 2 && snake[0].direction != 0) {
        snake[0].direction = 2;
      }
      break;
    case 75: // 'k'
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 1;
      }
      break;
    case 74: // 'j'
      if (snake[0].direction != 1 && snake[0].direction != 3) {
        snake[0].direction = 3;
      }
      break;
    case ESCAPE:
      if (play) {
        noLoop();
        play = false;
      }
      else {
        loop();
        play = true; 
      }
      break;
  }
}
