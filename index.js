// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    // use in prompt
    // 1. Title (input)
    // 2. Description (input)
    // 3. Installation instructions (input)
    // 4. Usage instructions (input)
    // 5. Contribution guidelines (input)
    // 6. Test instructions (input)
    // 7. License (list)
    // 8. GitHub Username (input)
    // 9. contact email (input)
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description for your project...',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install your program?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use the project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How can you test the program?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT License', 'CC0', 'Attribution 4.0 International (CC)', 'GNU GLPV3', 'None'],
        default: 4,
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What email should be displayed on the README?',
        name: 'email',
    },
];

function writeToFile(fileName, data) { // filename loaded from title property, data is template literal from generate markdown (aka your whole .md document as a string)
    fs.writeFile(`./${fileName}-README.md`, data, (err) =>
        err ? console.error(err) : console.log('Your README is done!'));
}

// Initialize questions and answer segment, calls generateMarkdown and writeToFile when all questions done
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const yourFile = generateMarkdown(response);
            writeToFile(response.title, yourFile);
        }
        );
}

// Function call to initialize app
init();
