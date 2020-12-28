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
      newDrawRect(snake[i].x, snake[i].y, COLOR_SNAKE);
    }
  }
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
