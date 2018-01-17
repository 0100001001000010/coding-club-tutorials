/* global draw Processing size background strokeWeight noStroke color line ellipse fill */

var paused = false;

document.addEventListener("keypress", function(event) {
   if (event.keyCode === 32) {
       paused = !paused;
   }
});

var sketch = function(processing) {
    with (processing) {
        var canvas = {
            width: window.innerWidth - 20,
            height: window.innerHeight - 20,
            midX: (window.innerWidth - 20) / 2,
            midY: (window.innerHeight - 20) / 2
        };
        
        size(canvas.width, canvas.height);
        background(80);




        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        // draw crosses
        var crossSize = 30;
        strokeWeight(7);
        line(canvas.midX - crossSize, canvas.midY, canvas.midX + crossSize, canvas.midY);
        line(canvas.midX, canvas.midY - crossSize, canvas.midX, canvas.midY + crossSize);

        // draw circles, ASSUMING HEIGHT IS LESS THAN WIDTH
        noStroke();
        fill(color(153, 0, 153));
        var angle = 0;
        var radius = canvas.height / 6;
        var distance = canvas.height / 3;
        for (let i = 0; i < 8; i++) {
            ellipse(canvas.midX + (Math.cos(angle) * distance), canvas.midY + (Math.sin(angle) * distance), radius, radius);
            angle += Math.PI / 4;
        }




        var timer = 0;
        angle = Math.PI / 2;
        draw = function() {
            if (timer >= 5) {
                // cover up circle
                fill(color(80, 80, 80));
                ellipse(canvas.midX + (Math.cos(angle) * distance), canvas.midY + (Math.sin(angle) * distance), radius, radius);

                // fill in previous circle
                fill(color(153, 0, 153));
                ellipse(canvas.midX + (Math.cos(angle - (Math.PI / 4)) * distance), canvas.midY + (Math.sin(angle  - (Math.PI / 4)) * distance), radius, radius);

                angle += Math.PI / 4;
                timer = 0;
            }
            if (!paused) {
                timer++;
            }
        };    
    
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};

var p = new Processing(document.getElementById("output-canvas"), sketch);