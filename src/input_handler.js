document.addEventListener("keydown", function (input) {
    console.log(input);
    if (input.code == "KeyW") player.velocity.y = -5;
    if (input.code == "KeyS") player.velocity.y = 5;
    if (input.code == "KeyA") player.velocity.x = -5;
    if (input.code == "KeyD") player.velocity.x = 5;
    if (input.code == "Space")
        bullets.push(new Bullet(player.position.x +2+ player.size.width / 2.8, player.position.y));
    if(input.code=="Enter") this.location.reload(animate);
})
document.addEventListener("keyup", function (input) {
    if (input.code == "KeyW") player.velocity.y = 0;
    if (input.code == "KeyS") player.velocity.y = 0;
    if (input.code == "KeyA") player.velocity.x = 0;
    if (input.code == "KeyD") player.velocity.x = 0;
})
