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

}

function setup() {
// set up all the things that will be displayed
  createCanvas(900, 600);
  img = loadImage('images/gotcha_planet01.jpg');
  ship = new Ship(shipSprite);
  invaderWave = new InvaderWave(width/2, height/4, invaderRows, invaderCols, invaderSprite);
  invaderWave.init();

}


function draw() {

   background(0);
   image(img, 500, 200, 1000, 900);
  //image(canvas, 0, 0)
  ship.show();
  ship.move();

 invaderWave.render();
 invaderWave.update();
 invaderWave.alienShoot(bullets);

 if(!ship.gameOver && !invaderWave.gameOver && !invaderWave.win) {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].update();
      if(bullets[i].despawn()) {
        bullets.splice(i, 1);
        }
    }
  }
}

 function keyReleased() { // when we release a key
   if(key != ' ') {
     ship.setDir(0);  // set the ship direction speed to 0
   }
 }

function keyPressed() {

  if (key === " ") {
    bullets.push(ship.shoot());
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  };
}
