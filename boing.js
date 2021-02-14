class hulk
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
			this.image=loadImage("yass (1).png")
		this.r=r
		this.body=Bodies.circle(x,y,r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			image(this.image,0,0,this.r, this.r);
			pop()
    }
	}