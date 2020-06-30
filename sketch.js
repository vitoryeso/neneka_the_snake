let PLAY = false;

let SNAKE_SQUARE_SIZE = 10;
let STEP_LEN = 5;
let WINDOW_HEIGHT, WINDOW_WIDTH;
WINDOW_HEIGHT = WINDOW_WIDTH = 600;
let CURRENT_DIRECTION;

let snake = [ {X: 10, Y: 10, MoveId: -1} ];
let snake_moves = [];

function createSnake(n) { // n is a integer, the length of the snake.
	for(var i=0; i<n; i++) {
		snake.push( {X:10, Y: 10, MoveId: 2*(i + 1)} );
	}
}

function spawnFood() {
	food.X = ~~(Math.random() * WINDOW_WIDTH)
	food.Y = ~~(Math.random() * WINDOW_HEIGHT)
}

function setup() {
	createCanvas(WINDOW_HEIGHT, WINDOW_WIDTH);
	frameRate(30);
	createSnake(5);
	noLoop();
}

function draw() {
	background(0);
	addSnakeMove();
	if(snake_moves.length > 0) {
		moveSnake();
	}
	drawSnake();
}

function drawSnake() {
	for(var i=0; i<snake.length; i++) {
		rect(snake[i].X, snake[i].Y, SNAKE_SQUARE_SIZE, SNAKE_SQUARE_SIZE);
	}
}

function moveSnake() {
	snake[0].X += snake_moves[snake_moves.length - 1][0];
	snake[0].Y += snake_moves[snake_moves.length - 1][1];
		for(var i=1; i<snake.length; i++) {
			if(snake_moves.length > snake[i].MoveId) {
				snake[i].X += snake_moves[snake_moves.length - 1 - snake[i].MoveId][0];
				snake[i].Y += snake_moves[snake_moves.length - 1 - snake[i].MoveId][1];
			}
		}
}

function addSnakeMove() {
	if(CURRENT_DIRECTION !== "") {
		switch(CURRENT_DIRECTION) {
			case "left":
				snake_moves.push( [-5, 0] );
				break;
			case "right":
				snake_moves.push( [5, 0] );
				break;
			case "up":
				snake_moves.push( [0, -5] );
				break;
			case "down":
				snake_moves.push( [0, 5] );
				break;
		}
	}
	if(snake_moves.length > (2*snake.length - 1) ) snake_moves.splice(0, 1);
}

function keyPressed() {
	switch(keyCode) {
		case LEFT_ARROW:
			if(CURRENT_DIRECTION !== "left" && CURRENT_DIRECTION !== "right") {
				CURRENT_DIRECTION = "left";
			}
			if(!PLAY) {
				loop();
				PLAY = true;
			}
			break;
		case RIGHT_ARROW:
			if(CURRENT_DIRECTION !== "right" && CURRENT_DIRECTION !== "left") {
				CURRENT_DIRECTION = "right";
			}
			if(!PLAY) {
				loop();
				PLAY = true;
			}
			break;
		case UP_ARROW:
			if(CURRENT_DIRECTION !== "up" && CURRENT_DIRECTION !== "down" ) {
				CURRENT_DIRECTION = "up";
			}
			if(!PLAY) {
				loop();
				PLAY = true;
			}
			break;
		case DOWN_ARROW:
			if(CURRENT_DIRECTION !== "down" && CURRENT_DIRECTION !== "up") {
				CURRENT_DIRECTION = "down";
			}
			if(!PLAY) {
				loop();
				PLAY = true;
			}
			break;
		case 32:
			if(PLAY) {
				noLoop();
				PLAY = false;
			}
			break;
	}
}
