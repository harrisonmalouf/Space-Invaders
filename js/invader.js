function Invader(x, y, r, sprite) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.destroy = false;
  this.sprite = sprite;
  this.xdir = 1;

  this.show = function() {
    imageMode(CENTER);
    image(this.sprite, this.x, this.y, this.r, this.r)
  }

  this.shoot = function(bullets, shootRate) {
    if(random() < shootRate) {
      bullets.push(new Bullet(this.x, this.y, false));
    }
  }
}
