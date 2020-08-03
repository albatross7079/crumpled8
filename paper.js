  class Paper  {
    constructor(x,y,radius)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,this.radius);
            pop();
        }

}
