// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is the purpose of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Enter your project contribution guidelines.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are your test instructions for your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ['apache', 'mit', 'N/A']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(readmeData => { writeToFile('README.md', generateMarkdown(readmeData)) })
        .catch(error => {
            if (error) {
                throw error
            }
        })
}

// Function call to initialize app
init();
