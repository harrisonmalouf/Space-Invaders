let ship;
let bullets = [];

let invaderWave;
let invaderSprite;
let shipSprite;
let canvas;

let invaderRows = 4
let invaderCols = 10


function preload() {
 invaderSprite = loadImage('images/invaderShip.png')
 shipSprite = loadImage('images/archibalde_hawk.png')
 // shipSprite = loadImage('archibalde_hawk.png')
//  invaderSprite = function() {
//   noStroke();
//   fill(255, 0, 200);
//   rectMode(CENTER);
//   ellipse(this.x, this.y, this.r, this.r);
// }
//
// console.log('load', invaderSprite);

}

function setup() {
// set up all the things that will be displayed
  createCanvas(1000, 700);
//  canvas = loadImage('images/space.jpg')

  // image(invaderSprite, 0, 0)

  ship = new Ship(shipSprite);
  invaderWave = new InvaderWave(width/2, height/4, invaderRows, invaderCols, invaderSprite);
  invaderWave.init();
}


function draw() {

   background(0);
  //image(canvas, 0, 0)
  ship.show();
  ship.move();

 invaderWave.render();
 invaderWave.update();

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
}

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
//   for (let i = bullets.length-1; i >= 0; i--) {
//     if (bullets[i].destroy) {
//       bullets.splice(i, 1);
//     }
//   }
//
//       if (invaderWave.destroy) {
//         invaders.splice(i, 1);
//     }
 }


 function keyReleased() { // when we release a key
   if(key != ' ') {
     ship.setDir(0);  // set the ship direction speed to 0
   }
 }

function keyPressed() {

  if (key === " ") {
    let bullet = new Bullet(ship.x, height*1);
    bullets.push(bullet);
  }

    if (keyCode === RIGHT_ARROW) {
      ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
      ship.setDir(-1);
    };
  }
