import chalk from 'chalk';
import clear from "clear";
import figlet from "figlet";
// import files from "./libs/files.js";

//Clear Console
clear();

//Draw gitizi in terminal
console.log(chalk.yellow(figlet.textSync("Gitizi",{horizontalLayout:"full"})));

