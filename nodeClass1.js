/* Challenge 1
function e() {
    //print a line that has the string "HELLO WORLD"
    console.log("HELLO WORLD");
}
e();

------------------------------------------------------------------------

Challenge 2
process.argv = ['/path/to/node', 'learnyournode', 'verify', 'nodeClass1.js', '1', '2', '3']

//the function takes an argument in the form of an array
function b(iterable) {

    let result = 0;
    //The for loop receives the array and iterate through each of the values
    for (let i = 2; i < iterable.length; i++) {
        //result picks up each item and adds it to result
        result += parseInt(iterable[i]);
    }
    return result;
}
console.log(b(process.argv));

------------------------------------------------------------------------------

Challenge 3
//import the file module
let fs = require('fs');
//read the content of the file, encode it --to avoid using method toString--
let fContent = fs.readFileSync(process.argv[2], 'utf-8');
//identify the newlines and split them as an array, with \n as the 'delimiter'
let fContentArray = fContent.split('\n');
//print out the length of the array - 1 to count the # of new lines
console.log(fContentArray.length - 1);

----------------------------------------------------------------------------------

Challenge 4

//import the file module
let fs = require('fs');
//read the content of the file, encode it and collect the value of a callback function
let fContent = fs.readFile(process.argv[2], 'utf-8', function(err, data) {
    //identify the data, split them as an array with \n as the 'delimiter'
    let fContentArray = data.split('\n')
        //print out the length of the array - 1 to count the # of new lines
    console.log(fContentArray.length - 1);
});

----------------------------------------------------------------------------------

//Challenge 5

let fs = require('fs');

// node(0) nodeClass1.js(1) someFolderName(2) js(3)

let folderName = process.argv[2];
let fExtension = process.argv[3]

let path = require('path');

//node fileName folderName js 

// path.extname('name of the file in string format').slice(2)

fs.readdir(folderName, function(err, lFileNames) {
    if (err) {
        return console.log(err);
    }
    // step1) iterate through lFileNames
    for (let iterate = 0; iterate < lFileNames.length; iterate++) {
        // step2) check if the file has the same extension as fExtension
        if (path.extname(lFileNames[iterate]) === "." + fExtension) {
            // step3) if it does print it
            console.log(lFileNames[iterate]);
        }
    }
    
});

------------------------------------------------------------------------

Challenge 6

//Todo: Create two files
//Todo: module create a function that handles the reading of the fileNames
module.exports = function aFilter(dirName, fNameExt, userFunction) {
    let fs = require('fs');
    let path = require('path');
    
    fs.readdir(dirName, function(err, lFileNames) {
        if (err) {
            return userFunction(err, null);
        }
        
        let filteredArr = [];
        
        for (iterate = 0; iterate < lFileNames.length; iterate++) {
            let file = lFileNames[iterate];
            let fileExtension = path.extname(file);
            
            if (fileExtension.slice(1) === fNameExt) {
                filteredArr.push(file);
            }
        }
        return userFunction(null, filteredArr);
    });
}

-------------------------------------------------------------------

Challenge 7

//requesting the http module
let http = require('http');
//requesting the url
let urlToGet = process.argv[2];

//method to make the GET requests
http.get(urlToGet, function callback(response) {
    
    //manage the response event handlers
    response.on('data', console.log)
    response.on('error', console.error)
    
    //set the encoding method to emit Strings instead of Node Buffer objects
    response.setEncoding('utf-8');
    
});

---------------------------------------------------------------------------
*/
// Challenge 8

let http = require("http");
let urlNeeded = process.argv[2];


http.get(urlNeeded, response => {

    let body = "";
    response.on("data", data => {
        body += data.toString();
    });

    response.on("end", () => {
        console.log(body.length);
        console.log(body);
    })

});

//function name(argument)