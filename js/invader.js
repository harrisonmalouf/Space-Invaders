function Invader(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.destroy = false;

  this.xdir = 1;

  this.show = function() {
    rectMode(CENTER);
    ellipse( this.x, this.y, this.r, this.r)
    // noStroke();
    fill(255, 0, 200);
    // rectMode(CENTER);
    // ellipse(this.x, this.y, this.r, this.r);
  }

  // this.move = function() {
  //   this.x += this.xdir;
  // }
  //
  // this.moveDown = function() {
  //   this.xdir *= -1;
  //   this.y += this.r;
  // }

  this.shoot = function(bullets, shootRate) {
    if(random() < shootRate ) {
      bullets.push(new Bullet(this.x, this.y, false));
    }
  }

  this.death = function () {
    this.destroy = true;
  }
}
