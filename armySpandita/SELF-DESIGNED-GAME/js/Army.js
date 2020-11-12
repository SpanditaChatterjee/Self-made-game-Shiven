class Army{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 200, 100, options);
        this.width = width;
        this.height = height;
        
        this.image = loadImage("Images/ArmyMan.png");
        this.imageLeft=loadImage("Images/Army_left.png")
        this.imageRight=loadImage("Images/Army_right.png")
        this.image2=loadImage
        World.add(world, this.body);
    }

    display(){
        
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      console.log(this.img)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //rect( 0, 0, this.width, this.height)
      pop();
    }

    displayLeft(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        console.log(this.img)
        imageMode(CENTER);
        image(this.imageLeft, 0, 0, this.width, this.height);
        //rect( 0, 0, this.width, this.height)
        pop();
      }
      displayRight(){
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        console.log(this.img)
        imageMode(CENTER);
        image(this.imageRight, 0, 0, this.width, this.height);
        //rect( 0, 0, this.width, this.height)
        pop();
      }
}