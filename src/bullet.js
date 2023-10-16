class Bullet{
    constructor(point_x,point_y){
        this.position={
            x:point_x,
            y:point_y
        };
        this.size={
            width:20,
            height:20
        }
        this.velocity={
            x:0,
            y:-5
        }
        this.Image= new Image();
        this.Image.src = "./resources/bullet.png"
    }
    draw(){
        ctx.beginPath();
       // ctx.fillStyle="white";
      //  ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        ctx.drawImage(this.Image,this.position.x,this.position.y,this.size.width,this.size.width);
        ctx.closePath();
    }
    move(){
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
    }
};