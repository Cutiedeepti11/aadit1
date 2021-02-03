class Box
{
    constructor(x,y,width,height)
    {
        var ball_options ={
            restitution: 1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,ball_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }
    show()
    {
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255)
        rect(pos.x,pos.y,this.width,this.height);
    }
}