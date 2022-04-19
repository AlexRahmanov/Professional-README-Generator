// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
{
    type: 'input',
    name: 'userName',
    message: 'Please enter your name? (Required)',
    validate: userNameInput => {
        if (userNameInput) {
            return true;
        } else {
            console.log('Please enter your name!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You need to enter a project description!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
},

{
    type: 'input',
    name: 'usage',
    message: 'Please provide examples of usage instructions'
},

{
    type: 'input',
    name: 'contribution',
    message: 'Please enter your contribution guidelines:'
},

{
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for this system:'
},

{
    type: 'list',
    name: 'license',
    message: 'Does this application have a license?',
    choices: [{name:'MIT', value: 'MIT',}, {name: 'GPL 3.0', value: 'GPL_3.0'}, {name: 'Apache-2.0', value: 'Apache-2.0'}, {name: 'ISC', value: 'ISC'}, {name: 'NTP', value: 'NTP'}, {name: 'Aladdin', value: 'Aladdin'}, {name:'none', value: null}]
},

{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'githublink',
    message: 'Enter your GitHub profile link (Required)',
    validate: githubLink => {
        if (githubLink) {
            return true;
        } else {
            console.log('Please enter your GitHub profile link!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: 'Enter your email address (Required)',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
}

];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        
        console.log('Page created! Check out README.md in this directory to see it!');
    })        
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then(data => {
        const pageMD = generateMarkdown(data);
        writeToFile('./README.md', pageMD)
    })
};

// Function call to initialize app
init();