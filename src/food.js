function resetFood() {
  food.x = ~~(Math.random() * WIDTH); 
  food.y = ~~(Math.random() * HEIGHT); 
}

function drawFood() {
  newDrawRect( food.x, food.y, COLOR_FOOD);
}
