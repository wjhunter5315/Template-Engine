// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
const inquirer = require('inquirer');
  
class Employee {
    constructor(name, id, title) {
        this.name = name;
        this.id = id;
        this.title = title;
    }
    getInfo() {
        inquirer
            .prompt([
                {
                    name: 'userName',
                    message: 'What is your name?',
                },
                {
                    name: 'userID',
                    message: 'What is your ID number?',
                },
                {
                    type: 'list',
                    name: 'userRole',
                    message: 'What is your role?',
                    choices: ['Manager', 'Engineer', 'Intern'],
                },
                {
                    name: 'userEmail',
                    message: 'What is your Email address?',
                }
            ])
            .then(answers => {
                console.info('Name:', answers);
            })
    }
    // If userRole === Manager, call new Manager class from Manager.js to get office number.
    // If userRole === Engineer, call new Engineer class from Engineer.js to get gitHub username.
    // If userRole === Inter, new Intern for school name
}

module.exports = Employee;