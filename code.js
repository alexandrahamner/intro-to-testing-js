// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// const helloWorld = function() {
//     return "Hello, World!";
// }

function sayHello(input) {
    if (typeof input !== "string" || input === "") {
        return "Hello, World!";
    } else if (!isNaN(input) && typeof input === "string") {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}