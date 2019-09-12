function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10; // this is the radius of the bullet for the hit collition.
  this.destroy = false;
  this.speed = 10

  this.show = function() {
    ellipse(this.x, this.y, this.r, this.r);

    if(this.player) {
      fill(50, 0, 200)
    } else {
      fill(100,0,200)
    }
  }

  // this.death = function () {
  //   this.destroy = true;
  // }

  this.hits = function(invader) {
    let d = dist(this.x, this.y, invader.x, invader.y);
    if (d < this.r + invader.r) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
  if(this.ship) {
    this.y -= this.speed; // players bullet will shoot up the screen,
  } else {
    this.y += this.speed/2 //alien bullets will be half as fast as a players bullet, the bullets will travel down the screen.
  }
}

  this.move = function () {
    this.y = this.y - 4;
  }

}
