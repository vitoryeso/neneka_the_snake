function resetFood() {
  food.x = ~~(Math.random() * (WIDTH - 6)) + 2; 
  food.y = ~~(Math.random() * (HEIGHT - 6)) + 2; 
}

function drawFood() {
  image(hatsune, food.x * SQUARE_SIZE, food.y * SQUARE_SIZE, SQUARE_SIZE*3, SQUARE_SIZE*3);
}
