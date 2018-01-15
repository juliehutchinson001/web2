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
Challenge 8

//Request the http module
let http = require("http");
//Acquire the url
let urlNeeded = process.argv[2];

//get request is initialized, the url is passed and an annonimous func for the response
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

-----------------------------------------------------------------

//Challenge 9 

let http = require('http');

let urls = process.argv.slice(2);
let results = []; // Array(3 urls)

// initialise results array (3 empty positions)
for (let index = 0; index < urls.length; index++) {
    results[index] = null;
}

//looping the urls and passing an index to id the different urls
for (let i = 0; i < urls.length; i++) {
    (function(i) {
        //http request with each url indexed
        http.get(urls[i], function(request) {
            //create a variable body to the content
            let body = "";
            //convert to string the data entering
            request.setEncoding("utf8");
            //passing of the data begings
            request.on("data", function(data) {
                body += data;
            });
            //end of the data being passed
            request.on("end", function() {
                results[i] = body;
                let resultCount = 0;
                //loop that verifies the length --complete data-- of each url
                for (let j = 0; j < results.length; j++) {
                    if (results[j] != null) resultCount++;
                }
                //print the result in the order received
                if (resultCount === results.length) {
                    for (j = 0; j < results.length; j++) {
                        console.log(results[j]);
                    }
                }
            });
        });
    })(i);
}

------------------------------------------------------------------------------------

//Challenge 10: Time Server

let port = process.argv[2];

let net = require('net')

function serverDate(month) { return month < 10 ? '0' + month : month }

let server = net.createServer(function(socket) {
    // socket handling logic
    let formatedDate = new Date();
    let socketServer = formatedDate.getFullYear() + "-" +
    serverDate(formatedDate.getMonth() + 1) + "-" +
    serverDate(formatedDate.getDate()) + " " +
    serverDate(formatedDate.getHours()) + ":" +
    serverDate(formatedDate.getMinutes()) + "\n";
    socket.end(socketServer);
});

server.listen(port);

------------------------------------------------------------------------------------

//Challenge 11: HTTP File Server

//import http module
let http = require('http');
let fs = require('fs');

//get port number from the command line
let portNumber = process.argv[2];

//get file from the command line
let aNewFile = process.argv[3];

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(aNewFile).pipe(res);
}).listen(portNumber);
------------------------------------------------------------------------------------
*/

//Challenge 12: HTTP Uppercaserer

//import http module
let http = require('http');
let portNumber = process.argv[2];
map = require('through2-map');

var httpServer = http.createServer(function(request, response) {
    if (request.method === 'POST') {
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
httpServer.listen(portNumber);