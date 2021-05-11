class Paper{
    constructor(x,y,r){

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r/2),{restitution:0.3,friction:0,density:1.2,isStatic:false})
        this.image = loadImage("paper.png");

        World.add(world,this.body)
    }
        display()
        {
            var pos = this.body.position
           push()
			translate(pos.x,pos.y);
			rectMode(CENTER)
            fill(255,0,255)
            imageMode(CENTER)
            image(this.image,0,0,this.r,this.r)
	        //(0,0,this.r,this.r)
            pop();

        }
     
}