function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.r = 15;
  this.destroy = false;

  this.xdir = 1;

  this.show = function() {
    noStroke();
    fill(255, 0, 200);
    rectMode(CENTER);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.move = function() {
    this.x += this.xdir;
  }

  this.moveDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.death = function () {
    this.destroy = true;
  }
}
