// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
}