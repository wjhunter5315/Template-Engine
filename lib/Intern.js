const inquirer = require('inquirer');

class Intern {
    constructor(school) {
        this.school = school;
    }

    getSchool() {
        inquirer
            .prompt([
                {
                    name: 'schoolName',
                    message: 'What school are you affiliated with?',
                }
            ])
            .then(answers => {
                console.log('School:', answers);
                const internSchool = answers.schoolName;
                console.log(internSchool);
            })
    }
}
module.exports = Intern;