class Slingshot{
constructor(bodyA,pointB)
{
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.4,
    length:10
}
this.pointB=pointB;
this.sling=Constraint.create(options);
World.add(world,this.sling);
}
fly(){
    this.sling.bodyA=null;
}
display(){
    if(this.sling.bodyA){
    var p=this.sling.bodyA.position; 
push();
strokeWeight(5);
stroke("red");
line(p.x,p.y,this.pointB.x,this.pointB.y);
pop();
 }
}
}