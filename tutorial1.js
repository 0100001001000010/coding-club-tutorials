// single-line comment

/* multi-line
   comment    */

var num1;
num1 = 1;

var num2 = 2;

var total = num1 + num2;

// console.log("hi");
// console.log(total);




// --------------------------


var firstName = "aaron";
var lastName = "susantin";
var fullName = firstName + " " + lastName;

// console.log(fullName);


// --------------------------

/* adding strings just puts them next
   to each other                        */
var one = "1";
var two = "2";

var otherTotal = one + two;

// console.log(otherTotal);    // 12


// --------------------------

var array = [1, 2, 3];

// console.log(array);

array.push(4);
array.push(5);
array.push(6);

// console.log(array);

// --------------------------

function greeting() {
    console.log("Greetings.");
    console.log("Hello.");
    console.log("How are you?");
    console.log("I hope you are doing well.");
}

// greeting();




function greet(name) {
    console.log("Hello, " + name + ".");
}

// greet("Audrey");
// greet("Lord Buckethead");



// ------------------------------

for (var i = 0; i < 10; i++) {
    // console.log(i);
    // console.log("spam");
}

// ------------------------------

var array2 = ["a", "b", "c"];
// array2[0] is a;
// arrays start counting from 0!

// for (var i = 0; i < array2.length; i++) {
//     console.log(array2[i]);
// }




// -----------------------




// only works on browsers
// (doesn't work with node)
alert("popup");