class answer{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.image=loadImage("ring.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("chocolate");
        strokeWeight(4)
        stroke("brown")
        imageMode(CENTER);
        image( this.image,0, 0, this.width, this.height);
        pop();
      }
}