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

});