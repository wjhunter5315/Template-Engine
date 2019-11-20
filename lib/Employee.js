const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');

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
                    name: 'userEmail',
                    message: 'What is your Email address?',
                },
                {
                    type: 'list',
                    name: 'userRole',
                    message: 'What is your role?',
                    choices: ['Manager', 'Engineer', 'Intern'],
                }
            ])
            .then(answers => {
                console.info('Name:', answers);
                const userRole = answers.userRole;
                console.log(answers.userRole);
                const userID = answers.userID;
                console.log(userID);
                const userName = answers.userName;
                console.log(userName);
                const userEmail = answers.userEmail;
                console.log(userEmail);

                if (userRole === 'Manager') {
                    const manager = new Manager();
                    manager.getOfficeNumber();
                    const managerPath = path.join(__dirname + '/../templates/manager.html');
                    fs.readFile('templates/manager.html', 'utf8', function (err,data) {
                        if (err) {
                          return console.log(err);
                        }
                        var result = data.replace(/id="managerName">/g, `>${userName}`);
                        var uID = data.replace(/id="managerId">/g, `>${userID}`);
                        var uEmail = data.replace(/id="managerEmail">/g, `>${userEmail}`);
                        fs.appendFile('output/manager.html', result + uID + uEmail, 'utf8', function (err) {
                           if (err) return console.log(err);
                        });
                    });
                }
                else if(userRole === 'Engineer') {
                    const engineer = new Engineer();
                    engineer.getGitHub();
                    const engineerPath = path.join(__dirname + '/../templates/engineer.html');
                    fs.readFile('templates/engineer.html', 'utf8', function (err,data) {
                        if (err) {
                          return console.log(err);
                        }
                        var result = data.replace(/id="engineerName">/g, `${userName}>`);
                        var uID = data.replace(/id="engineerId">/g, `>${userID}`);
                        var uEmail = data.replace(/id="engineerEmail">/g, `>${userEmail}`);
                        fs.appendFile('templates/engineer.html', result + uID + uEmail, 'utf8', function (err) {
                           if (err) return console.log(err);
                        });
                    });
                }
                else if(userRole === 'Intern') {
                    const intern = new Intern();
                    intern.getSchool();
                    const internPath = path.join(__dirname + '/../templates/intern.html');
                    fs.readFile('templates/intern.html', 'utf8', function (err,data) {
                        if (err) {
                          return console.log(err);
                        }
                        var result = data.replace(/id="internName">/g, `${userName}>`);
                        var uID = data.replace(/id="internId">/g, `>${userID}`);
                        var uEmail = data.replace(/id="internEmail">/g, `>${userEmail}`);
                        fs.appendFile('templates/intern.html', result + uID + uEmail, 'utf8', function (err) {
                           if (err) return console.log(err);
                        });
                    });
                }
            })
    }
}

module.exports = Employee;