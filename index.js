import chalk from 'chalk';
import clear from "clear";
import figlet from "figlet";
import askForGithubCredentials from './libs/inquirer';

import getCurrentDirectoryBasename from "./libs/files";
import directoryExists from './libs/files';



//Clear Console
clear();

//Draw gitizi in terminal
console.log(chalk.yellow(figlet.textSync("Gitizi",{horizontalLayout:"full"})));

//Check if the file already contains .git

if (directoryExists('.git')) {
    console.log(chalk.red('Already a Git repository!'));
    // process.exit();
  };



const run = async () => {
  const credentials = await askForGithubCredentials();
  console.log(credentials);
};

run();