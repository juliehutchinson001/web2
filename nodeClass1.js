/* Challenge 1
function e() {
    console.log("HELLO WORLD");
}
e();
*/

// Challenge 2
//process.argv = ['/path/to/node', 'learnyournode', 'verify', 'nodeClass1.js', '1', '2', '3']

function b(iterable) {

    let result = 0;
    for (let i = 2; i < iterable.length; i++) {
        result += parseInt(iterable[i]);
    }
    return result;
}
console.log(b(process.argv));