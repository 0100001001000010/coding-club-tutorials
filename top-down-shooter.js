var shipSprite = document.getElementById("ship-img");
var bulletSprite = document.getElementById("bullet-img");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// sprite, x position, y position, width, height
// context.drawImage(shipSprite, 0, 0, 75, 75);

var xPos = 0;
var yPos = 0;

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(shipSprite, xPos, yPos, 75, 75);
    xPos++;
    yPos++;

    window.requestAnimationFrame(gameLoop);
}

gameLoop(); // starts the loop