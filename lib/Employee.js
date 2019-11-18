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
    getName() {
        inquirer
            .prompt([
                {
                    name: 'userName',
                    message: 'What is your name?',
                }
            ])
            .then(answers => {
                console.info('Name:', answers);
            })
        // this.getID();
    }

    getId(id) {
        inquirer
            .prompt([
                {
                    name: 'userID',
                    message: 'What is your ID number?',
                }
            ])
            .then(answers => {
                console.info('ID:', answers);
            });
        this.getRole();
    }

    getRole(title) {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'userRole',
                    message: 'What is your role?',
                    choices: ['Manager', 'Engineer', 'Intern'],

                }
            ])
            .then(answers => {
                console.info('Role:', answers);
            });
        this.getEmail();
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    name: 'userEmail',
                    message: 'What is your Email address?',
                }
            ])
            .then(answers => {
                console.info('Email:', answers);
            });
    }
}

module.exports = Employee;