let aMaster = require("./nodeClass1.js");

let folderName = process.argv[2];
let extensionToCheck = process.argv[3];

function callback(err, cleanFileNames) {
    if (err) {
        return console.log(err);
    }
    // iterate through cleanFileNames
    let fl = cleanFileNames.length;
    for (let iterate = 0; iterate < fl; iterate++) {
        console.log(cleanFileNames[iterate]);
    }
}

aMaster(folderName, extensionToCheck, callback);