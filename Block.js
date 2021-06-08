class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      push();
      var pos= this.body.position;
      tint(255,255,255,this.visibility);
      image(this.image, pos.x - 17, pos.y - 21);
      if (this.body.speed > 2) {
      World.remove(world,this.body);
      this.visibility-= 50 ;
      }
      pop();
    }
}