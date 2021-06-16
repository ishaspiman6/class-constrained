class Chain{

constructor( bodyA,bodyB ){
var something = {
    bodyA:bodyA,
    bodyB:bodyB,
    length:50

}
this.chain = Constrained.create(something);
World.add(world,this.chain)
}
display(){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)

}


}