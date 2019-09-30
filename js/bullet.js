function Bullet(x, y, ship) {
  this.x = x;
  this.y = y;
  this.r = 10; // this is the radius of the bullet for the hit collition.
  this.destroy = false;
  this.speed = 10
  this.ship = ship;

  this.show = function() {
    ellipse(this.x, this.y, this.r, this.r);

    if(this.ship) {
      fill(50, 0, 200)
    } else {
      fill(100,0,200)
    }
  }

  this.hits = function(invader) { // current hit mechanic
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
    this.y += this.speed/3; //alien bullets will be 1/3 as fast as a players bullet, the bullets will travel down the screen.
  }
}

this.despawn = function() {
  if(this.ship) {
    if(this.y < -this.r) {
      return true;
    }
  } else {
      if(this.y > height+this.r) {
        return true;
      }
    }
    return false;
  }

  this.move = function () { // current shoot mechanic
    this.y = this.y - 4;
  }
}
