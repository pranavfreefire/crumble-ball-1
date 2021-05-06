class Paper{
    constructor(){
        var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
        }
     this.body=Matter.Bodies.circle(50,200,20,options) 
     World.add(world,this.body)
    }
    display(){
        circle(this.body.position.x,this.body.position.y,20)
    }
}