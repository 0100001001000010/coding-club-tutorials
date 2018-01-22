/* global draw Processing size background mouseClicked mouseX mouseY noStroke ellipse rect fill */

var canvas = {
    width: window.innerWidth,
    height: window.innerHeight,
    midX: window.innerWidth / 2,
    midY: window.innerHeight / 2
};
window.onresize = function() {
    canvas = {
        width: window.innerWidth,
        height: window.innerHeight,
        midX: window.innerWidth / 2,
        midY: window.innerHeight / 2
    };
};

var balls = [];








var sketch = function(processing) {
    with (processing) {
        size(canvas.width, canvas.height);
        background(0);

        fill(255);
        noStroke();

        var floor = canvas.height - 30;
        var gravity = -1000;                // must be negative value
        var maxBounce = 0;                  // must be integer 0 or moar
        var energyConserved = 0.6;          // must be 0 - 1 (at -1000 gravity, 90 is sooper bouncy and 60 is fairly realistic)




        draw = function() {
            background();
            rect(0 + 20, floor, canvas.width - 40, 10);   // draw the floor

            for (var i = 0; i < balls.length; i++) {
                // draw the balls
                ellipse(balls[i].x, balls[i].y, 7, 7);




                // var yReal = switchUnits(balls[i].y);
                var y0real = switchUnits(balls[i].y0);
                var v0real = -balls[i].v0;  // negative v0 to switch to real-life units
                var timeSinceStart = ((new Date()).getTime() - balls[i].startTime) / 1000;  // in seconds

                var yRealNew = y0real + getHeightChange(v0real, timeSinceStart);               // y = y0 + deltaY
                // balls[i].y += 5;
                balls[i].y = switchUnits(yRealNew);




                // bounce or delete if on floor
                if (balls[i].y > floor) {
                    var shouldBounce;
                    if (maxBounce > 0) {
                        shouldBounce = balls[i].timesBounced < maxBounce ? true : false;
                    }
                    else {
                        shouldBounce = getVelocity(v0real, timeSinceStart) < -150 ? true : false;   // if upwards velocity is high enough
                    }

                    if (shouldBounce) {
                        balls[i].timesBounced++;
                        // console.log("%c bounce " + balls[i].timesBounced, "background: #222; color: #bada55");

                        // change in direction (y flips because bounce redirects force) cancels out unit change (positive-y flips)
                        balls[i].v0 = getVelocity(v0real, timeSinceStart) * energyConserved;

                        balls[i].y0 = floor;
                        balls[i].y = floor;     // set it to the floor just in case it can't bounce back up fast enough to clear the line
                        balls[i].startTime = (new Date()).getTime();
                    }
                    else {
                        balls.splice(i, 1);
                        i--;    // prevents skipping over items due to array splice
                        // console.log("delete");
                    }
                }
            }
        };




        mouseClicked = function() {
            balls.push({        // all units in computer (positive-y is down)
                x: mouseX,
                y: mouseY,
                y0: mouseY,     // initial height
                v0: 0,          // initial velocity
                timesBounced: 0,
                startTime: (new Date()).getTime()
            });
        };




        // switches between real-life yPos and game yPos, because irl, positive is up and 0 is floor
        var switchUnits = function(y) {
            return -y + floor;
        };




        // returns change in yPos based on initial velocity, time since falling/bouncing, and acceleration (gravity)
        // based on kinematics equation deltaX = v0 * t + (1/2) * a * t^2
        // uses real-life units (i.e. +y is up, 0 is floor)
        var getHeightChange = function(v0, t) {
            return (v0 * t) + ((1/2) * gravity * Math.pow(t, 2));
        };

        // returns velocity based on initial velocity and time since falling/bouncing
        // based on kinematics equation v = v0 + a * t
        // units do not matter as long as they are of the same type
        var getVelocity = function(v0, t) {
            return v0 + (gravity * t);
        };
    }
};

var p = new Processing(document.getElementById("output-canvas"), sketch);