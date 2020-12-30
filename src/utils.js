function newDrawRect( posX, posY, color ) {
  fill(color);
  rect(posX * SQUARE_SIZE, posY * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
}

function checkFoodColision() {
  for (var i=0; i<3; i++) {
    for (var j=0; j<3; j++) {
      if (snake[0].x == food.x+i && snake[0].y == food.y+j) {
        return true;
      }
      if (snake[0].x == food.x+i && snake[0].y == food.y+j+1) {
        return true;
      }
      if (snake[0].x == food.x+i && snake[0].y == food.y+j-1) {
        return true;
      }
      if (snake[0].x == food.x+i+1 && snake[0].y == food.y+j) {
        return true;
      }
      if (snake[0].x == food.x+i-1 && snake[0].y == food.y+j) {
        return true;
      }
    }
  }
  return false;
}

function checkSelfColision () {
  for(var i=1; i<snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      return true; 
    }
  }
  return false;
}

function drawScore () {
  
  textSize(14);
  textFont(gameFont);
  fill(COLOR_GAMEOVER_SCREEN);
  text("SCORE: " + score, 3, GAME_HEIGHT - SQUARE_SIZE);
}
