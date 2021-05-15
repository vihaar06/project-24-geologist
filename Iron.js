class Iron {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
        friction:0.9,
        density:12,
        
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }