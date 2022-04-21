// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project? (Required)',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter the name of the project!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project:(Required)',
    validate: description => {
        if (description) {
            return true;
        } else {
            console.log('Please enter a few words about the project!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'installation',
    message: "Please enter installation instructions for your project: (Required)",
    validate: installationCommands => {
        if (installationCommands) {
            return true;
        } else {
            console.log('Please enter the necessary instructions for installation!');
            return false;
        }
    }
},  

{
    type: 'input',
    name: 'usage',
    message: "Please enter usage details for your project:(Required)",
    validate: usage => {
        if (usage) {
            return true;
        } else {
            console.log("Please enter the necessary project's usage detail!");
            return false;
        }
    }
}, 

{
    type: 'list',
    name: 'license',
    message: "Choose the license for the project:",
    choices: [
        "GNU GPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
        "BSD 3-Clause"
    ]
},

{
    type: 'input',
    name: 'contributing',
    message: "Please enter details for contributing to your project:(Required)"
},


{
    type: 'input',
    name: 'tests',
    message: "Please enter details for testing your project:(Required)"
},

{
    type: 'input',
    name: 'username',
    message: "Enter your github username:(Required)",
    validate: username => {
        if (username) {
            return true;
        } else {
            console.log('Please enter the github username!');
            return false;
        }
    }
},

{
    type: 'input',
    name: 'email',
    message: "Enter your email address:(Required)",
    validate: email => {
        if (email) {
            return true;
        } else {
            console.log('Please enter the email address!');
            return false;
        }
    }
}

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success! README.md file is created in the folder');
    });
}


// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Professional README Generator! Please answer the questions you see in the prompt.");
    inquirer
    .prompt(questions)
    .then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('./README.md', readmeContent);
    })

    .catch(error => {
        if(error.isTtyError) {
        } else {

        }
    });
}


// Function call to initialize app
init();