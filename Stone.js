class Stone {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:0.9,
        density:12,
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 140;
      this.height = 40;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }