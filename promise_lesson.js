/*
import { setTimeout } from "timers";

function asyncAction(callback) {
    setTimeout(function() {
        callback();
    }, 4444);
}

asyncAction(function() {
    console.log("Async Action completed via callback");
});
//continues...

*/

// Problems to solve. 

// 1) You need to pass a number into asyncAction that sets the wait 
// time before the callback is executed.

// 2) You need to pass a time and your name as a string into 
// asyncAction. After the wait the callback should return the name 
// string a greeting and print it to the console after the call back 
// resolves.

function asyncAction(number, name, callback) {
    setTimeout(function() {
        callback(name);
    }, number);
}

asyncAction(5000, 'julie', function(name) {
    console.log("Async Action completed via callback " + name);
});





//-------------------------------------------------------------
var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // resolve('Success!');
        reject('Error: promise rejected');
    }, 4000);
});

// p.then(function() {}).catch(function() {});

//The 
p.then(function(message) {
    console.log('Promise resolved successfully!');
    console.log(message);

}).catch(function(err) {
    console.log('Promise rejected');
    console.log(err);
});

// Problems to solve
// 1) What happens when a promise is rejected?
// 2) What happens when you call both resolve and reject? 
// Does the order matter? 
// --------------------------------------------

// Chaining Promises 

// p.then().catch()

// The two methods below each return a promise. Promises can be chained. 
// In other words a Promise can return another Promise! This might look
// like this: 

// method(a => p).then(b => p).then(c => p).then()

// If any promise in the chain is rejected it will call catch() at the 
// end of the chain. It might look like this: 

// p.then().then().then().catch()

// This function takes a name and returns a greeting + the name. 
// If name is not a string this Promise is rejected. 
function greet(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // name = 0; // <-- Somethign happened to name here. 
            if (typeof name === 'string') {
                resolve('hello ' + name);
            } else {
                reject('Name must be a string!');
            }
        }, 1233);
    });
}


// This function take in a string and returns the same string converted 
// to uppercase. If the string is not a string 
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof str === 'string') {
                resolve(str.toUpperCase());
            } else {
                reject('Argument to uppercaser must be string');
            }
        }, 1500)
    });
}

// Here we call greet() then call uppercaser() with the results then log the results. 
// If there is an error at either method it is handled by catch() at the end of the
// chain. 

greet("123").then((str) => {
    // console.log('str:'+str);
    return uppercaser(str);
    // return uppercaser();
}).then((str) => {
    console.log(str);
    return greet(str)
}).then((str) => {
    console.log(str);
    return uppercaser(str)
}).then((str) => {
    console.log(str);
}).catch((err) => {
    console.log(err);
});

// 1) What happens if greet() or uppercaser() fails? Can you make 
// each of these fail and observe the results. 
// 2) What happens if you call greet() on the results from 
// uppercaser()? Test this. 
// 3) Write a method that takes a string as input and returns 
// the input string with a space added between each character. 
// Call this method spacer(str). It should run async so use a
// setTimeout() and return a Promise. 
// 4) Last call spacer() after you call greeter() and uppercaser()


function spaceName(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (typeof name === 'string') {
                // add spaces here...
                for (var char of str) {
                    console.log(123);
                    resolve(char + " ");
                }
            } else {
                reject('Name must be a string!');
            }
        }, 1233);
    });
}

spaceName('Julie').then((str) => {
    console.log('str: ' + str);
});