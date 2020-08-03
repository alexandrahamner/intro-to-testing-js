// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (typeof input === "string" && isNaN(input)) {
        return ("Hello, " + input + "!");
    }
    return "Hello, World!";
}


function isFive(input) {
    return parseFloat(input) === 5;
}


function isEven(x) {
    return (parseFloat(x) % 2) === 0;
}

function isVowel(x) {
    return (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" || x === "A" || x === "E" || x === "I" || x === "O" || x === "U");
}