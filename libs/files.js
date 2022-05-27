import fs from "fs";
import path from "path";


  export function  getCurrentDirectoryBasename(){
        return path.basename(__dirname);
    };
    export default function directoryExists (filename){
        return fs.existsSync(filename);
    }


