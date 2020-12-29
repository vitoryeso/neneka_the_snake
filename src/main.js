/* SCREENS
 * MAIN == 0
 * GAMEOVER == 1
 */

let SCREEN = 0;

// time
let start;
let end;

const GAME_WIDTH = 1000;
const GAME_HEIGHT = 500;

const SQUARE_SIZE = 10;
const WIDTH = GAME_WIDTH / SQUARE_SIZE;
const HEIGHT = GAME_HEIGHT / SQUARE_SIZE;

let play = true;
let score = 0;

let food = { x:  ~~(Math.random() * WIDTH), y: ~~(Math.random() * HEIGHT) };
let snake = [ { x: 10, y: 10, direction: 2 } ];

// colors can be grayscale scalar or rgb array
const COLOR_SNAKE = [255, 0, 0]; 
const COLOR_SNAKE_HEAD = [155, 0, 255];
const COLOR_BG = [25, 225, 25];
const COLOR_FOOD = [255, 240, 22];

const COLOR_PAUSE = 170;
const COLOR_PAUSE_TEXT = [255, 0, 255];

const COLOR_GAMEOVER_SCREEN = [225, 25, 225];
const COLOR_GAMEOVER_TEXT = [25, 225, 25];

// gamer over screen utils 
let laughtCount = 1;

// loading a font
let gameFont;

function preload() {
  gameFont = loadFont("./fonts/PressStart2P-Regular.ttf");
  hatsune = loadImage("./imgs/hatsune.jpg");
}

function setup() {
  frameRate(60);
  createCanvas(GAME_WIDTH, GAME_HEIGHT);
  start = new Date().getTime();
}

function draw() {
  switch(SCREEN) {
    case 0:
      if (play) {
        background(COLOR_BG);
        drawSnake();
        drawScore();
        updateSnakePos();
        if (checkSelfColision()) {
          end = new Date().getTime();
          // game over screen
          SCREEN = 1;
        }
        if (checkFoodColision()) {
          score++;
          resetFood(); 
          upgradeSnake();
        }
        drawFood();
      }
      else {
        pauseScreen();
      }
      break;
    case 1:    
      gameOverScreen();
      break;
  }
}


function keyPressed() {
  if (SCREEN == 0) {
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
  else if (SCREEN == 1) {
    if (keyCode == ENTER) {
      SCREEN = 0;
      score = 0;
      start = new Date().getTime();
      snake = [ { x: 10, y: 10, direction: 2 } ];
      noLoop();
      loop();
    }
  }
}
