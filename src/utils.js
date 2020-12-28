function newDrawRect( posX, posY, color ) {
  fill(color);
  rect(posX * SQUARE_SIZE, posY * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
}

function checkFoodColision() {
  if (snake[0].x == food.x && snake[0].y == food.y) {
    return true;
  }
  else return false;
}

function checkSelfColision () {
  for(var i=1; i<snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      return true; 
    }
  }
  return false;
}
