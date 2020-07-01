let PLAY = false;

let SNAKE_SIZE = 10;
let STEP_LEN = 5;
let WINDOW_HEIGHT, WINDOW_WIDTH;
WINDOW_HEIGHT = 1000;
WINDOW_WIDTH = 600;
let CURRENT_DIRECTION;
let SNAKE_SPACING = 2;
let SNAKE_COLOR = [255, 0, 0];

let snake = [ {X: 10, Y: 10, MoveId: -1} ];
let snake_moves = [];

function preload() {
    img = loadImage("/imgs/neneka.jpg");
}

function createSnake(n) { // n is a integer, the length of the snake.
	for(var i=0; i<n; i++) {
		snake.push( {X:10, Y: 10, MoveId: SNAKE_SPACING*(i + 1)} );
	}
}

function appendSnake() {
    let lastX, lastY;
    lastX = snake[snake.length - 1].X
    lastY = snake[snake.length - 1].Y 
    snake.push( {X: lastX, Y: lastY, MoveId: SNAKE_SPACING*snake.length} );
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
	background(170, 255, 130);
	if(snake_moves.length > 0) {
		moveSnake();
	}
	drawSnake();
	addSnakeMove();
}

function update_color() {
    if(SNAKE_COLOR[0] > 0 && SNAKE_COLOR[2] <= 0) {
        SNAKE_COLOR[0] -= 30;
        SNAKE_COLOR[1] += 30;
    }
    if(SNAKE_COLOR[1] > 0 && SNAKE_COLOR[0] <= 0) {
        SNAKE_COLOR[1] -= 30;
        SNAKE_COLOR[2] += 30;
    }
    if(SNAKE_COLOR[2] > 0 && SNAKE_COLOR[1] <= 0) {
        SNAKE_COLOR[2] -= 30;
        SNAKE_COLOR[0] += 30;
    }
}

function drawSnake() {
    image(img, snake[0].X - SNAKE_SIZE*4/2, snake[0].Y - SNAKE_SIZE*4/2, SNAKE_SIZE*4, SNAKE_SIZE*4);
    update_color();
	for(var i=1; i<snake.length; i++) {
        strokeWeight(2);
        stroke(0);
        fill(SNAKE_COLOR);
		circle(snake[i].X, snake[i].Y, SNAKE_SIZE);
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
	if(snake_moves.length > (SNAKE_SPACING*snake.length - 1) ) snake_moves.splice(0, 1);
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
                appendSnake();
			}
			break;
	}
}
