let ship;
let bullets = [];

let invaderWave;
let invaderSprite;

let invaderRows = 3
let invaderCols = 5


function preload() {
 //invaderSprite = loadImage('images/invaderShip.png')
 invaderSprite = function() {
  noStroke();
  fill(255, 0, 200);
  rectMode(CENTER);
  ellipse(this.x, this.y, this.r, this.r);
}
//
// console.log('load', invaderSprite);

}

function setup() {
// set up all the things that will be displayed
  createCanvas(600, 500);

  // image(invaderSprite, 0, 0)

  ship = new Ship();
  invaderWave = new InvaderWave(width/2, height/4, invaderRows, invaderCols);
  invaderWave.init();
}


function draw() {
  background(0);
  ship.show();

 invaderWave.render();
 invaderWave.update();

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
//     for (let j = 0; j < invaders.length; j++) {
//       if (bullets[i].hits(invaderWave[j])) {
//         invaderWave[j].death();
//         bullets[i].death();
//       };
   }
// }

//   invaderWave.move();
//   if  (invaderWave.x > width || invaderWave.x < 0) {
//     edge = true;
//   }
//
//   if (edge) {
//       invaderWave.moveDown();
//     }
//     edge = false;
//   }
//
  for (let i = bullets.length-1; i >= 0; i--) {
    if (bullets[i].destroy) {
      bullets.splice(i, 1);
    }
  }
//
//       if (invaderWave.destroy) {
//         invaders.splice(i, 1);
//     }
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
