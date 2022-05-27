let fs = require("fs");
let path= require("path");

module.exports={
    getCurrentDirectoryBasename:()=>{
        return path.basename(__dirname);
    },
    directoryExists: (filename)=>{
        return fs.existsSync(filename);
    }
}

