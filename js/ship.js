function Ship(sprite) {
  this.x = width/2;
  this.xdir = 0;
  this.sprite = sprite;
  this.r = 150

  this.lives = 1;

  this.gameOver = false;

  this.show = function() {
    imageMode(CENTER);
    image(this.sprite, this.x, height-70, this.r, this.r);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.update = function() {
    if(this.lives <= 0) {
      this.gameOver = true;
    }
  }

  this.shoot = function() {
    return new Bullet(this.x, this.y, true);
  }

  this.hit = function(bullets) {
    for(var i = bullets.length-1; i >= 0; i--) {
      if(!bullets[i].player) {
        if((bullets[i].x > this.x-this.r/2 && bullets[i].x < this.x+this.r/2) && (bullets[i].y > this.y-this.r/2 && bullets[i].y < this.y+this.r/2)) {
          bullets.splice(i, 1);
          this.lives--;
          }
        }
      }
    }

  this.move = function(dir) {
    this.x += this.xdir*7;
  }
}
