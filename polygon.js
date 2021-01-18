class Polygon{
    constructor(x,y){
        var options ={
            isStatic : false,
            density : 5
        }
        this.body = Bodies.circle(x,y,40,options);
                
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        image(this.image,pos.x,pos.y,150,150);
    }
}