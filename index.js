// TODO: Include packages needed for this application = DONE

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for input
const questions = [
    {
        type: 'input',
        message: "What is your project's title?",
        name: "title",
    }, 
    {
        type: 'input',
        message: "What is your project's description?",
        name: "description",
    },
    {
        type: 'input',
        message: "How do you install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What can you do with your project?",
        name: "usage",
    },
    {
        type: "list",
        message: "What license are you using?",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            "BSD 3-Clause",
            "GNU General Public License V3.0",
            "MIT License",
            
        ]
    },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "help",
    }, 
    {
        type: "input",
        message: "Test Instructions?",
        name: "test",
    },
    {
        type: "input",
        message: "Please enter your github username",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fill template in with recorded data
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    //write the recorded data to a README.md file
        writeToFile("README", response),
    );
}

// Function call to initialize app
init();

