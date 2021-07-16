class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255;
      World.add(world, this.body);
      this.image=loadImage('block.png')
    }
    display(){
     

      if(this.body.speed>6){
        push()
        World.remove(world,this.body)
        this.visibility=this.visibility-5
       tint(255,this.visibility) ;
       image(this.image,this.body.position.x,this.body.position.y)
      pop()
      }
      else{
        var pos= this.body.position;
     
        push()
        translate(pos.x, pos.y);
        // rectMode(CENTER);
        rotate(this.body.angle)
        
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0)
        pop()
      }
    }

}