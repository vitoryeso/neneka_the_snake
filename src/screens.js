function pauseScreen() {
  fill(COLOR_PAUSE_TEXT);
  textSize(24);
  textFont(gameFont);
  text("vc pausou amigo", GAME_WIDTH/3, GAME_HEIGHT/2);
}

function gameOverScreen() {
  SCREEN = 1;
  background(COLOR_GAMEOVER_SCREEN);

  let text1 = "ai perdeu...";
  if (laughtCount%17 == 0) {
    text1 = "ai perdeu kkkkkkkkkkkkkkkkkkk";
    laughtCount = 1;
  }
  else {
    laughtCount++;
  }

  const text3 = "aperte enter pra jogar dnv";

  textSize(24);
  textFont(gameFont);
  fill(COLOR_GAMEOVER_TEXT);
  text(text1, GAME_WIDTH/3, GAME_HEIGHT/2);
  text((end -  start)/1000 + "s", GAME_WIDTH/3, GAME_HEIGHT/2 + 3*SQUARE_SIZE);
  text(text3, GAME_WIDTH/3, GAME_HEIGHT - SQUARE_SIZE);
}
 
