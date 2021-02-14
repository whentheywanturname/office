class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.5,
            length: 550
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){  
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           strokeWeight(0);
           stroke("grey")
         line(pointA.x, pointA.y, pointB.x, pointB.y);
            
       
    }
    
}