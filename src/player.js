class Player {
    constructor() {
        this.position = {
            x: 350,
            y: 700
        };
        this.size = {
            width: 80,
            height: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.Alive=true;
        this.Image=new Image();
        this.Image.src="./resources/player.png"
    }
   
    draw()
    {
        ctx.beginPath();
        ctx.drawImage(this.Image,this.position.x,this.position.y,this.size.width,this.size.height);
        ctx.closePath();
    }
    move(){
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
    }
    check_border(){
        if(this.position.x<0) this.position.x=0;
        if(this.position.x+this.size.width>width) this.position.x=width-this.size.width;
        if(this.position.y<0) this.position.y=0;
        if(this.position.y+this.size.height>height) this.position.y=height-this.size.height;
    }
    update()
    {
        this.draw();
        this.move();
        this.check_border();
    }
};