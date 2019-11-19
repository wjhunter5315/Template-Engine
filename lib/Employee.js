const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
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
                console.log('Role:', answers.userRole);
                const userRole = answers.userRole;

                if (userRole === 'Manager') {
                    const manager = new Manager();
                    manager.getOfficeNumber();
                }
                else if(userRole === 'Engineer') {
                    const engineer = new Engineer();
                    engineer.getGitHub();
                }
                else if(userRole === 'Intern') {
                    const intern = new Intern();
                    intern.getSchool();
                }
            })
    }
}

module.exports = Employee;