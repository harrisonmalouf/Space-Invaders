function Ship() {
  this.x = width/2;
  this.xdir = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    // imageMode(CENTER);
    // image(this.sprite, this.x, height-20, this.r, this.r);
    rect(this.x, height-20, 20, 20);
  }

  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*7;
  }
}
