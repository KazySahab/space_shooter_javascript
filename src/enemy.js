class Enemy {
    constructor() {
        this.position = {
            x: Math.floor(Math.random() * (width - 50 - 50) + 50),
            y: -50
        }
        console.log(this.position.x);
        this.size = {
            width: 60,
            height: 60
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.Image = new Image();
        this.Image.src = './resources/enemy.png'

    }

    draw() {
        ctx.beginPath();
        ctx.drawImage(this.Image, this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.closePath();
    }
    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    collision_player(player) {
        if (this.position.x + this.size.width >= player.position.x &&
            this.position.x <= player.position.x + player.size.width &&
            this.position.y + this.size.height >= player.position.y &&
            this.position.y <= player.position.y + player.size.height) {
            player.Alive = false;
        }
    }

    collision_bullet(bullets) {
        for (let i = 0; i < bullets.length; i++) {
            if (this.position.x + this.size.width >= bullets[i].position.x &&
                this.position.x <= bullets[i].position.x + bullets[i].size.width &&
                this.position.y + this.size.height - 20 >= bullets[i].position.y &&
                this.position.y <= bullets[i].position.y + bullets[i].size.height) {
                this.velocity = 0;
                this.position.x = -500;
                this.position.y = -500;
                bullets[i].position.x = -500;

            }
        }
    }
    collision_border() {
        if (this.position.y + this.size.height >= height) {
            player.Alive = false;
        }
    }
    update() {
        this.draw();
        this.move();
        this.collision_border();
    }


};