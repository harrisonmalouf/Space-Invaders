function InvaderWave(x, y, row, col, sprite) {
  this.x = x;
  this.y = y;

  this.sprite = sprite;

  this.rows = row;
  this.cols = col;

  this.aliens; // This is here as a reference.
  this.alienRadius = 30;
  this.alienSpacing = 1.3;
  this.alienShootRate = 0.001;

  this.xSpeed = 1;
  this.speedIncrease = 0.05;

  this.init = function() {
    this.aliens = new Array(this.rows); //this.aliens is an array, the this.row is a value that will be passed in on the main.js

    for (let r = 0; r < this.rows; r++) {
      this.aliens[r] = new Array(this.cols); // in every row we have, we insert a passed in value of columns which are arrays
    }

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.aliens[r][c] = new Invader(this.x-(this.cols*(this.alienRadius*this.alienSpacing))/2 + (this.alienRadius*this.alienSpacing)*c, this.y-(this.rows*(this.alienRadius*this.alienSpacing))/2 + (this.alienRadius*this.alienSpacing)*r, this.alienRadius, this.sprite);
      }
    }
  }

  this.render = function() {
    for (let r = 0; r < this.aliens.length; r++) {
      for (let c = 0; c < this.aliens[r].length; c++) {
         this.aliens[r][c].show();
      }
    }
  }

  this.update = function() {
    let edge = false;

    for (let r = 0; r < this.aliens.length; r++) {
      for (let c = 0; c < this.aliens[r].length; c++) {
        this.aliens[r][c].x += this.xSpeed;

        if(this.aliens[r][c].y + this.aliens[r][c].r > height - ship.r && !this.aliens[r][c].hit) {
          this.gameOver = true;
        }

        // console.log(width, this.aliens[r][c].x,  this.aliens[r][c].r);

        if(this.aliens[r][c].x + this.aliens[r][c].r > width || this.aliens[r][c].x - this.aliens[r][c].r < 0) { // no !this.hit
          edge = true;
        }
      }
    }
    if (edge) {

      edge = false;
      this.xSpeed *= -1;
      this.y += this.alienRadius

      for (let r = 0; r < this.aliens.length; r++) {
        for (let c = 0; c < this.aliens[r].length; c++) {

          this.aliens[r][c].y += this.alienRadius;
          this.aliens[r][c].x += this.xSpeed
        }
      }
    }
  }

  this.alienShoot = function(bullets) {
    for(var r = 0; r < this.aliens.length; r++) {
        for(var c = 0; c < this.aliens[r].length; c++) {
            if(!this.aliens[r][c].hit) {
                this.aliens[r][c].shoot(bullets, this.alienShootRate);
              }
          }
      }
  }

this.alienHit = function(bullets) {

  for(var r = this.aliens.length-1; r >= 0; r--) {
    for(var c = this.aliens[r].length-1; c >= 0; c--) {

      for(var i = bullets.length-1; i >= 0; i--) {
        if(bullets[i].ship ) {

          if((bullets[i].x+bullets[i].r/2 >= this.aliens[r][c].x-this.aliens[r][c].r/2 && bullets[i].x-bullets[i].r/2 <= this.aliens[r][c].x+this.aliens[r][c].r/2) && (bullets[i].y+bullets[i].r/2 <= this.aliens[r][c].y+this.aliens[r][c].r/2 && bullets[i].y-bullets[i].r/2 >= this.aliens[r][c].y-this.aliens[r][c].r/2)) {
            this.aliens[r].splice(c,1);
            bullets.splice(i,1);
            }
          }
        }
      }
    }
  }

}
