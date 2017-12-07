var bulletSprite = document.getElementById("bullet-img");

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var keypresses = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false
};

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 38) {
        keypresses.up = true;
    }
    if (event.keyCode === 40) {
        keypresses.down = true;
    }
    if (event.keyCode === 37) {
        keypresses.left = true;
    }
    if (event.keyCode === 39) {
        keypresses.right = true;
    }
    if (event.keyCode === 32) {
        keypresses.space = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 38) {
        keypresses.up = false;
    }
    if (event.keyCode === 40) {
        keypresses.down = false;
    }
    if (event.keyCode === 37) {
        keypresses.left = false;
    }
    if (event.keyCode === 39) {
        keypresses.right = false;
    }
    if (event.keyCode === 32) {
        keypresses.space = false;
    }
});

var ship = {
    xPos: 0,
    yPos: 0,
    speed: 5,
    sprite: document.getElementById("ship-img"),

    goUp: function() {
        this.yPos -= this.speed;
    },
    goDown: function() {
        this.yPos += this.speed;
    },
    goLeft: function() {
        this.xPos -= this.speed;
    },
    goRight: function() {
        this.xPos += this.speed;
    },
    shoot: function() {
        console.log("shoot");
    },

    move: function() {
        if (keypresses.up === true) {
            this.goUp();
        }
        if (keypresses.down) {
            this.goDown();
        }
        if (keypresses.left) {
            this.goLeft();
        }
        if (keypresses.right) {
            this.goRight();
        }
        if (keypresses.space) {
            this.shoot();
        }
    }
};

function Bullet(x, y) {
    this.xPos = x,
    this.yPos = y,
    this.speed = ship.speed + 3,

    this.draw = function() {
        
    },
    this.move = function() {
        
    }
}

var bulletArray = [];
bulletArray.push(new Bullet(x, y));

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(ship.sprite, ship.xPos, ship.yPos, 75, 75);

    ship.move();

    window.requestAnimationFrame(gameLoop);
}

gameLoop(); // starts the loop