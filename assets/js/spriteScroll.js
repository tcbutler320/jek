const SCALE = 1;
const WIDTH = 24;
const HEIGHT = 32;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [1, 0,1, 2];
const FACING_DOWN = 0;
const FACING_UP = 3;
const FACING_LEFT = 1;
const FACING_RIGHT = 2;
const FRAME_LIMIT = 6;
const MOVEMENT_SPEED = 1;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let keyPresses = {};
let currentDirection = FACING_DOWN;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 0;
let positionY = 20;
let img = new Image();
let chest = '/assets/assets/img/sprites/chests.png'; //'/assets/img/sprites/treasure-chest0000.png';
var executed = false;

console.log('jeksprite activated');

window.addEventListener("keydown", keyDownListener);
function keyDownListener(event) {
  keyPresses[event.key] = true;
}

window.addEventListener("keyup", keyUpListener);
function keyUpListener(event) {
  keyPresses[event.key] = false;
}

function loadImage(sprite) {
  img.src = sprite;
  img.onload = function () {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(
    img,
    frameX * WIDTH,
    frameY * HEIGHT,
    WIDTH,
    HEIGHT,
    canvasX,
    canvasY,
    SCALED_WIDTH,
    SCALED_HEIGHT
  );
}

function drawChest(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(
    chest,
    frameX * WIDTH,
    frameY * HEIGHT,
    WIDTH,
    HEIGHT,
    canvasX,
    canvasY,
    SCALED_WIDTH,
    SCALED_HEIGHT
  );
}

loadImage('/assets/img/sprites/Gnome Soldier.png');

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let hasMoved = false;

  if (keyPresses.ArrowUp) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
    hasMoved = true;
  } else if (keyPresses.ArrowDown) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
  }

  if (keyPresses.ArrowLeft || keyPresses.Backspace) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.ArrowRight || keyPresses.a || keyPresses.b || keyPresses.c || keyPresses.d || keyPresses.e || keyPresses.f || keyPresses.g || keyPresses.h || keyPresses.i || keyPresses.j || keyPresses.k || keyPresses.l || keyPresses.m || keyPresses.n || keyPresses.o || keyPresses.p || keyPresses.r || keyPresses.s || keyPresses.t || keyPresses.u || keyPresses.v || keyPresses.w || keyPresses.x || keyPresses.y || keyPresses.z || keyPresses.space ) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    console.log('here we go: ' + scrolled);
    hasMoved = true;
  }

  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }

  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(
    CYCLE_LOOP[currentLoopIndex],
    currentDirection,
    positionX,
    positionY
  );

  window.requestAnimationFrame(gameLoop);
}

function moveCharacter(deltaX, deltaY, direction) {
  if (
    positionX + deltaX > 0 &&
    positionX + SCALED_WIDTH + deltaX < canvas.width
  ) {
    positionX += deltaX;
  }
  if (
    positionY + deltaY > 0 &&
    positionY + SCALED_HEIGHT + deltaY < canvas.height
  ) {
    positionY += deltaY;
  }
  currentDirection = direction;
}

function moveCharacter(deltaX, deltaY, direction) {
  if (
    positionX + deltaX > 0 &&
    positionX + SCALED_WIDTH + deltaX < canvas.width
  ) {
    positionX += deltaX;
  }
  if (
    positionY + deltaY > 0 &&
    positionY + SCALED_HEIGHT + deltaY < canvas.height
  ) {
    positionY += deltaY;
  }
  currentDirection = direction;
  // console.log('[DEBUG] Sprite Moved:'+direction);
}

function toggleSprite() {
  var x = document.getElementsByClassName("retro-canvas")[0];

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


var chestClosed = true;
var firstTime = true;

function openChest() {
  var chest = document.getElementsByClassName("chest")[0];
  if (chestClosed && positionX > 248) {
      chest.src="/assets/img/sprites/chests-closed.png";
      console.log('[DEBUG] User Opened Chest!');
  
    var x = document.getElementsByClassName("retrotype-win")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }  
    chestClosed = false;

  }

  if (chestClosed && positionX == 849) {
    chest.src="/assets/img/sprites/chests.png";
    console.log('[DEBUG] User Opened Chest!');

    var x = document.getElementsByClassName("retrotype-win")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }  
    chestClosed = false;

  } else  {
    chest.src="/assets/img/sprites/chests-closed.png";
    console.log('[DEBUG] User Closed Chest!');

    var x = document.getElementsByClassName("retrotype-win")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }  

    chestClosed = true;
  }
}