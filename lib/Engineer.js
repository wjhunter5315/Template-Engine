const inquirer = require('inquirer');

class Engineer {
    constructor(gitHub) {
        this.gitHub = gitHub;
    }

    getGitHub() {
        inquirer
            .prompt([
                {
                    name: 'gitHub',
                    message: 'What is your GitHub username?',
                }
            ])
            .then(answers => {
                console.log('Github Username:', answers);
                const engineerGit = answers.gitHub;
                console.log(engineerGit);
            })
    }
}
module.exports = Engineer;