class Baseclass
{
   constructor(x,y,width,height)
   {
       var option={restitution:0.5, friction:1,density:1}
       this.body=Bodies.rectangle(x,y,width,height);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
   }

   display()
   {
       rectMode(CENTER);
       angleMode(RADIANS);
       push();
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       rect(0,0,this.width,this.height);
       pop();
   }
}