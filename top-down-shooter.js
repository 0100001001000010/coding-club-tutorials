var bulletSprite = document.getElementById("bullet-img");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 38) {
        console.log("up");
    }
    if (event.keyCode === 40) {
        console.log("down");
    }
    if (event.keyCode === 37) {
        console.log("left");
    }
    if (event.keyCode === 39) {
        console.log("right");
    }
    if (event.keyCode === 32) {
        console.log("shoot");
    }
});

var ship = {
    xPos: 0,
    yPos: 0,
    sprite: document.getElementById("ship-img"),

    moveUp: function() {
        
    },
    moveDown: function() {
        
    },
    moveLeft: function() {
        
    },
    moveRight: function() {
        
    },
    shoot: function() {
        alert("shoot");
    }
};

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(ship.sprite, ship.xPos, ship.yPos, 75, 75);

    window.requestAnimationFrame(gameLoop);
}

gameLoop(); // starts the loop