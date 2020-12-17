class Dustbin{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.dustbinWidth=200;
		this.dustbinHeight=213;
        this.wallThickness=20;
        
        this.bottomBody=Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, options)
		this.leftWallBody=Bodies.rectangle(x-this.dustbinWidth/2,y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
		
		

		this.rightWallBody=Bodies.rectangle(x+this.dustbinWidth/2,y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options)
        this.image=loadImage("dustbingreen.png");

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

    display(){
    
        var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;
        push()
		translate(posLeft.x, posLeft.y);
		fill(255)
		rotate(this.angle)
		pop()

		push()
		translate(posRight.x, posRight.y);
		fill(255)
		rotate(-1*this.angle)
		pop()

		push()
		translate(posBottom.x, posBottom.y+10);
		fill(255)
		imageMode(CENTER);
		image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
		pop()
    }
}