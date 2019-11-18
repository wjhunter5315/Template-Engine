const inquirer = require('inquirer');
inquirer
  .prompt([
      {
          name: 'userName',
          message: 'What is your name?',
      },
      {
          name: 'userId',
          message: 'What is your ID number?',
      },
      {
          type: 'list',
          name: 'userRole',
          message: 'What is your role?',
          choices: ['Manager', 'Engineer', 'Intern'],

      }
  ])
  .then(answers => {
    console.info('Answer:', answers);
  });