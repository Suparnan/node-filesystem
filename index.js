const console = require("console");
const fs = require("fs");
const test = "./content"

fs.readdir(test, (err, files) => {
    files.forEach((file) => {
        if(!file){
            console.log("No Files found");
        }else if(err) {
            console.log(err);
        } else {
        console.log(file);
        }
    });
});