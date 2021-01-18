class Block{
  constructor(x,y) {
    var options = {
      'restituition' : 0.8,
      'friction' : 1.0,
      'density' : 0.2
    }
    this.body = Bodies.rectangle(x,y,70,70,options);
    this.width = 70;
    this.height = 70;
    this.visibility = 255;
    this.image = loadImage("box.png")
    World.add(world, this.body);
  }
  display(){
    imageMode(CENTER);
    fill("cyan");
    
    if(this.body.speed < 9){
    
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
    else{
       World.remove(world, this.body);
       push();
       this.visibility = this.visibility - 5;
       tint(255,this.visibility);
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       pop();
    }
  }
}