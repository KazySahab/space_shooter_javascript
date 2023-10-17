const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = 800;
let height = canvas.height = 800;

let num_of_enemy = 20;

const img = new Image();
img.src="./resources/bg.jpg"

const fire = new Audio();
fire.src="./resources/fire.wav"

const collide = new Audio();
collide.src="./resources/collide.mp3"

const bg = new Audio();
bg.src="./resources/bg.wav"
bg.volume = 0.15;

const player = new Player();
const bullets = [];
const enemies = [];

setInterval(() => {
    enemies.push(new Enemy());
}, 2000);

let deltaTime = 0;
let lastTimestamp = performance.now();

function start()
{
    requestAnimationFrame(animate);
}

function check_player_is_alive(){
    if(player.Alive==false)
    {
        collide.play();
        bg.pause(); 
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over ! ", (width / 2.8),350);
        ctx.font = "20px Comic Sans MS";
        ctx.fillText(" Press Enter to restart", (width / 3.2),400);
        exitAnimationFrame();
    }
}

function animate(timestamp) {
    deltaTime = (timestamp - lastTimestamp);
    lastTimestamp = timestamp;
    console.log(deltaTime);
    ctx.clearRect(0, 0, width, height);
    bg.play(); 
    ctx.drawImage(img,0,0,width,height);
    player.update();
    for(i=0;i<enemies.length;i++)
    {
        enemies[i].update();
        enemies[i].collision_player(player);
        enemies[i].collision_bullet(bullets);
    }
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].update();
    }
    check_player_is_alive(); 
    requestAnimationFrame(animate);
}

start();