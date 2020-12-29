function resetFood() {
  food.x = ~~(Math.random() * WIDTH); 
  food.y = ~~(Math.random() * HEIGHT); 
}

function drawFood() {
  image(hatsune, food.x * SQUARE_SIZE, food.y * SQUARE_SIZE, SQUARE_SIZE*3, SQUARE_SIZE*3);
}
