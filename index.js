// Packages required for application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./assets/utils/generateMarkdown");

//  array of questions for user input
const questions = [

    {
        type: "input",
        name: "github",
        message: "What's you GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:"
    },

    {
        type: "input",
        name: "github",
        message: "What's you GitHub username?"
    },

    {
        type: "list",
        name: "license",
        message: "What license does our project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GLP3.0", "BSD2", "BSD3", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },

    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?"
    }
];

// function to write read me file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        console.log("Generating.... Please wait....");
        writeToFile("./assets/utils/sampleREADME.md", generateMarkdown({ ...inquirerAnswers }));
    })
}

// Function call to initialize app
init();
