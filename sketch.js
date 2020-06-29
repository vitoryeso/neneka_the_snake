let PLAY = false;

let SNAKE_SQUARE_SIZE = 10;
let STEP_LEN = 5;
let WINDOW_HEIGHT, WINDOW_WIDTH;
WINDOW_HEIGHT = WINDOW_WIDTH = 600;
let CURRENT_DIRECTION;

let snake = [ {X: 10, Y: 10, MoveId: -1} ];
let snake_moves = [];

function spawnFood() {
	food.X = ~~(Math.random() * WINDOW_WIDTH)
	food.Y = ~~(Math.random() * WINDOW_HEIGHT)
}

function setup() {
	createCanvas(WINDOW_HEIGHT, WINDOW_WIDTH);
	frameRate(10);
	noLoop();
}

function draw() {
	background(0);
	addSnakeMove();
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
