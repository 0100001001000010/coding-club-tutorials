/*
       document : google-drawing2.js
     created on : friday, january 19, 2018, 11:26 am
         author : audrey
    description : for google's 2018 doodle competition

                                        88
                                        88
                                        88
      ,adPPYYba,  88       88   ,adPPYb,88  8b,dPPYba,   ,adPPYba,  8b       d8
      ""     `Y8  88       88  a8"    `Y88  88P'   "Y8  a8P,,,,,88  `8b     d8'
      ,adPPPPP88  88       88  8b      :88  88          8PP"""""""   `8b   d8'
      88,    ,88  "8a,   ,a88  "8a,   ,d88  88          "8b,   ,aa    `8b,d8'
      `"8bbdP"Y8   `"YbbdP'Y8   `"8bbdP"Y8  88           `"Ybbd8"'      Y88'
                                                                        d8'
                                                                       d8'
*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");  // ctx just stands for context




/*  note how i'm storing all of my variables and functions inside an object
    why? to avoid naming collisions

    think about it. we're all probably going to have a variable called
    xPos, yPos, xOffset, yOffset, size, width, height, radius, or something like that

    if any of us make a variable or function with the same name, when we combine our
    programs, they'll mess with each other. so be sure to put all of your stuff in
    an object so this doesn't happen
*/

var audrey = {
    setup: function() {
        /* please don't use ctx.scale()
           we'll be using that once everyone is done
           to resize each person's letter as needed */

        ctx.lineWidth = 2;
        ctx.fillStyle = "#ff6666";
    },

    drawBase: function() {
        // call this each time you make a new shape
        ctx.beginPath();

        // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
        ctx.ellipse(canvas.width / 2, canvas.height / 3, 50, 60, 0, 0, 2 * Math.PI);

        // colours the shape in (colour determined by ctx.fillStyle)
        ctx.fill();

        // draws a border (thickness is determined by ctx.lineWidth)
        ctx.stroke();

        // be sure to call stroke *after* fill or the border will look half as thick as it should be
    },

    drawKnot: function() {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 220);
        ctx.lineTo(canvas.width / 2 + 10, 240);
        ctx.lineTo(canvas.width / 2 - 10, 240);
        ctx.closePath();    // draws a straight line from last point to start point
        ctx.fill();
        ctx.stroke();
    },

    drawRope: function() {
        ctx.beginPath();
        
        // it seems useful to me to use variables so i can adjust them easily
        var mid = canvas.width / 2;
        var startY = 240;
        var height = 160;
        var xScale = 50;
        var yScale = 70;
        
        ctx.moveTo(mid, startY);
        ctx.bezierCurveTo(mid - xScale, startY + yScale, mid + xScale, startY + height - yScale, mid, startY + height);
        ctx.stroke();
    },

    draw() {    // feel free to use the new ECMAScript 6 syntax
        this.setup();
        this.drawRope();
        this.drawKnot();
        this.drawBase();

        /* the order that you call your functions matters!
           if i called drawBase before drawKnot, the ellipse
           wouldn't cover the top of the triangle */
    }
};

audrey.draw();