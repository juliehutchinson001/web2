/* Challenge 1
function e() {
<<<<<<< HEAD
    //print a line that has the string "HELLO WORLD"
=======
>>>>>>> 20be3155567a4b653b2b9c49a27b9af224839d80
    console.log("HELLO WORLD");
}
e();
*/

<<<<<<< HEAD
/* Challenge 2
process.argv = ['/path/to/node', 'learnyournode', 'verify', 'nodeClass1.js', '1', '2', '3']

//the function takes an argument in the form of an array
function b(iterable) {

    let result = 0;
    //The for loop receives the array and iterate through each of the values
    for (let i = 2; i < iterable.length; i++) {
        //result picks up each item and adds it to result
=======
// Challenge 2
//process.argv = ['/path/to/node', 'learnyournode', 'verify', 'nodeClass1.js', '1', '2', '3']

function b(iterable) {

    let result = 0;
    for (let i = 2; i < iterable.length; i++) {
>>>>>>> 20be3155567a4b653b2b9c49a27b9af224839d80
        result += parseInt(iterable[i]);
    }
    return result;
}
<<<<<<< HEAD
console.log(b(process.argv));
*/

// Challenge 3
//import the file module
let fs = require('fs');
//read the content of the file, encode it --to avoid using method toString--
let fContent = fs.readFileSync(process.argv[2], 'utf-8');
//identify the newlines and split them as an array, with \n as the 'delimiter'
let fContentArray = fContent.split('\n');
//print out the length of the array - 1 to count the # of new lines
console.log(fContentArray.length - 1);
=======
console.log(b(process.argv));
>>>>>>> 20be3155567a4b653b2b9c49a27b9af224839d80
