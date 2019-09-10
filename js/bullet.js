function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10; // this is the radius of the bullet for the hit collition.
  this.destroy = false;

  this.show = function() {
    noStroke();
    fill(50, 0, 200);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.death = function () {
    this.destroy = true;
  }

  this.hits = function(invader) {
    let d = dist(this.x, this.y, invader.x, invader.y);
    if (d < this.r + invader.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function () {
    this.y = this.y - 4;
  }

}
