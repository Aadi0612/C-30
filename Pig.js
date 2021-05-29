class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.visibility = 225

  }

  display() {

   console.log(this.body.speed)
   
   push();
   if (this.body.speed < 3){
    super.display()
   }
   else{
    this.visibility -= 5
   tint(255, this.visibility)
   image(this.image, this.body.position.x, this.body.position.y, 50, 50)

   World.remove(world, this.body )
  pop();
   }

  


  } 

  

};