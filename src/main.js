const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = 800;
let height = canvas.height = 800;

let num_of_enemy = 20;

const player = new Player();
const bullets = [];
const enemies = [];

setInterval(() => {
    enemies.push(new Enemy());
}, 2000);

function check_player_is_alive(){
    if(player.Alive==false)
    {
        console.log(player.Alive);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("Game Over ! ", (width / 2.8),350);
        ctx.font = "20px Comic Sans MS";
        ctx.fillText(" Press Enter to restart", (width / 3.2),400);
        exitAnimationFrame();
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height); 
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

animate();