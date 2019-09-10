let ship;
let invaders = [];
let bullets = [];
let edge = false
let noInvaders = 15
let invaderCols = 10;
let invaderRows = 5;

function setup() {

  createCanvas(1200, 600);

  ship = new Ship();
  bullet = new Bullet(width, height);
  for (let i = 0; i < noInvaders; i++) {
    for(let r = 0; r < invaderRows; r++) {
        for(let c = 0; c < invaderCols; c++) {;
            invaders[i] = new Invader(i*67+30);
        }
    }
  }
}

function draw() {
  background(51);
  ship.show();


  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < invaders.length; j++) {
      if (bullets[i].hits(invaders[j])) {
        invaders[j].death();
        bullets[i].death();
      };
  }
}
  for (let i = 0; i < invaders.length; i++) {
    invaders[i].show();
    invaders[i].move();
    if  (invaders[i].x > width || invaders[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i].moveDown();
    }
    edge = false;
  }

  for (let i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].destroy) {
      bullets.splice(i, 1);
    }
  }
    for (let i = invaders.length-1; i >= 0; i--) {
      if (invaders[i].destroy) {
        invaders.splice(i, 1);
    }
  }
}



function keyPressed() {

if (key === " ") {
  let bullet = new Bullet(ship.x, height*1);
  bullets.push(bullet);
}

  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  };
}
