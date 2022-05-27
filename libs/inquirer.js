import inquirer from 'inquirer';



  export default function askForGithubCredentials() {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Input your GitHub username or e-mail address:',
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please input your username or e-mail address.';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Input your password:',
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return 'Please input your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  };