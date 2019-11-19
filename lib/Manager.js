const inquirer = require('inquirer');

class Manager {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
            .prompt([
                {
                    name: 'officeNum',
                    message: 'What is your office number?',                
                }
            ])
            .then(answers => {
                console.log('Office Number:', answers);
            })
    }
}
module.exports = Manager;