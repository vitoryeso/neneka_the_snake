let snake = [ {X: 10, Y: 10, Direction: ""} ];
let WINDOW_HEIGHT, WINDOW_WIDTH;
let food = {X: 1, Y: 1};
let count = 1;
let play = true;

WINDOW_HEIGHT = WINDOW_WIDTH = 600;

function spawnFood(){
	food.X = ~~(Math.random() * WINDOW_WIDTH)
	food.Y = ~~(Math.random() * WINDOW_HEIGHT)
}

function setup(){
	createCanvas(WINDOW_HEIGHT, WINDOW_WIDTH);
}

function draw(){
	background(0);
	updateSnakePosition()
	strokeWeight(4);
	stroke(255, 0, 255);
	rect(snake[0].X, snake[0].Y, 10, 10);
	rect(food.X, food.Y, 10, 10)
	if(count %100 == 0){
		spawnFood();
		count = 1;
	}
	else count++;
}

function updateSnakePosition(){
	switch(snake.Direction){
		case "up":
			snake[0].Y -= 5;
			break;
		case "down":
			snake[0].Y += 5;
			break;
		case "right":
			snake[0].X += 5;
			break;
		case "left":
			snake[0].X -= 5;
			break;
	}
}

function keyPressed(){
	switch(keyCode){
		case LEFT_ARROW:
			if(snake.Direction !== "left"){
				if(play) snake.Direction = "left";
			}
			break;
		case RIGHT_ARROW:
			if(snake.Direction !== "right"){
				if(play) snake.Direction = "right";
			}
			break;
		case UP_ARROW:
			if(snake.Direction !== "up"){
				if(play) snake.Direction = "up";
			}
			break;
		case DOWN_ARROW:
			if(snake.Direction !== "down"){
				if(play) snake.Direction = "down";
			}
			break;
		case 32: //space key
			if(play){
				noLoop();
				play = false;
			}
			else{
				loop();
				play = true;
			}
	}
}
