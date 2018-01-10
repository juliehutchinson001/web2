/* Challenge 1
function e() {
    console.log("HELLO WORLD");
}
e();
*/

/* Challenge 2
process.argv = ['/path/to/node', 'learnyournode', 'verify', 'nodeClass1.js', '1', '2', '3']

function b(iterable) {

    let result = 0;
    for (let i = 2; i < iterable.length; i++) {
        result += parseInt(iterable[i]);
    }
    return result;
}
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



/*`hello\n 
julie\n
hutchinson`

['hello', 'julie', 'hutchinson'] - 1 */