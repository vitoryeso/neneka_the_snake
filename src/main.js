let GAME_WIDTH = 800;
let GAME_HEIGHT = 600;

let SQUARE_SIZE = 10;
let WIDTH = GAME_WIDTH / SQUARE_SIZE;
let HEIGHT = GAME_HEIGHT / SQUARE_SIZE;

let food = { x:  ~~(Math.random() * WIDTH), y: ~~(Math.random() * HEIGHT) };
let snake = [ { x: 10, y: 10, direction: 2 } ];

// colors can be grayscale scalar or rgb array
let COLOR_PLAYER = [255, 0, 0]; 
let COLOR_SNAKE_HEAD = [255, 0, 255];
let COLOR_BG = [25, 225, 25];
let COLOR_FOOD = [255, 240, 22];

function setup() {
  frameRate(40);
  createCanvas(GAME_WIDTH, GAME_HEIGHT);
}

function draw() {
  background(COLOR_BG);

  
  drawSnake();
  updateSnakePos();
  if (snake[0].x == food.x && snake[0].y == food.y) {
    resetFood(); 
    upgradeSnake();
  }
  drawFood();
}

function upgradeSnake() {
  let snakeGain;
  let lastX = snake[snake.length - 1].x;
  let lastY = snake[snake.length - 1].y;

  switch (snake[snake.length - 1].direction) {
    case 0:
      snakeGain = { x: lastX + 1, y: lastY, direction: 0 };
      break;
    case 1:
      snakeGain = { x: lastX, y: lastY + 1, direction: 1 };
      break;
    case 2:
      snakeGain = { x: lastX - 1, y: lastY, direction: 2 };
      break;
    case 3:
      snakeGain = { x: lastX, y: lastY - 1, direction: 3 };
      break;
  }
  snake.push(snakeGain);
}

function drawSnake() {
  for (var i=0; i<snake.length; i++) {
    if (i == 0) {
      newDrawRect(snake[i].x, snake[i].y, COLOR_SNAKE_HEAD);
    }
    else {
      newDrawRect(snake[i].x, snake[i].y, COLOR_PLAYER);
    }
  }
}

function resetFood() {
  food.x = ~~(Math.random() * WIDTH); 
  food.y = ~~(Math.random() * HEIGHT); 
}

function updateSnakePos() {
  for (var i=0; i<snake.length; i++) {
    switch (snake[i].direction) {
      case 0:
        if (snake[i].x == 0) {
          snake[i].x = WIDTH - 1;
        }
        else snake[i].x--;
        break;
      case 1:
        if (snake[i].y == 0) {
          snake[i].y = HEIGHT - 1;
        }
        else snake[i].y--;
        break;
      case 2:
        if (snake[i].x == WIDTH - 1) {
          snake[i].x = 0;
        }
        else snake[i].x++;
        break;
      case 3:
        if (snake[i].y == HEIGHT - 1) {
          snake[i].y = 0;
        }
        else snake[i].y++;
        break;
    }
  }
  for (var i=snake.length-1; i>0; i--) {
    snake[i].direction = snake[i-1].direction;
  }
}

function newDrawRect( posX, posY, color ) {
  fill(color);
  rect(posX * SQUARE_SIZE, posY * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
}

function drawFood() {
  newDrawRect( food.x, food.y, COLOR_FOOD);
}

function keyPressed() {
  // the snake cant move to the inverse of the current direction
  switch(keyCode) {
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
  }
}
