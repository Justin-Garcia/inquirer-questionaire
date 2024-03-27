#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation'
import { createSpinner } from 'nanospinner'
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// Set sleep timer
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

// Initialize the Inquirer prompt
async function introduction() {
    const title = chalkAnimation.neon((chalk.red(
        'LETS CREATE A README THE USER FRIENDLY WAY \n'
        )));
        await sleep();
        title.stop();

        console.log(`Here you will input all the necessary information for you README.md file. \n`);
}

await introduction();

const questions = [
    {
        type: 'input',
        name: 'title',
        message: chalk.blue('Please enter a project title:'),
        default: 'NEW PROJECT',
      },
      {
        type: 'input',
        name: 'description',
        message: chalk.blue('Please enter a project description:'),
      },
      {
        type: 'input',
        name: 'installation',
        message: chalk.blue('Please enter installation instructions:'),
      },
      {
        type: 'input',
        name: 'usage',
        message: chalk.blue('Please enter usage information:'),
      },
      {
        type: 'input',
        name: 'contributing',
        message: chalk.blue('Please enter contribution guidelines:'),
      },
      {
        type: 'input',
        name: 'tests',
        message: chalk.blue('Please enter test instructions:'),
      },
      {
        type: 'list',
        name: 'license',
        message: chalk.blue('Please choose a license for your project:'),
        choices: ['MIT', 'BSD', 'Apache 2.0', 'GNU', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: chalk.blue('Please enter your GitHub username:'),
        required: true,
      },
      {
        type: 'input',
        name: 'email',
        message: chalk.blue('Please enter your email address:'),
        required: true,
      }
      
];

// async function handleAnswers(created) {
//     const spinner = createSpinner('Generating README.md').start();
//     await sleep();

//     if (!created) {
//         spinner.fail('README.md Generation Failed!');
//         return console.log('Error: Answers are null');
//     } else {
//         spinner.success('README.md Generated Successfully!');
//         console.log(answers);
//     }
// };

async function createREADME(fileName, data) {
    const spinner = createSpinner(`Generating README.md`).start();
    await sleep();

    fs.writeFile(fileName, data, (err) =>
        err ?  spinner.error('README.md Generation Failed!')
         : spinner.success('README.md Generated Successfully!')
    );
}

function init() {
    inquirer.prompt(questions) 
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        createREADME('./README.md', markdownContent);
    });
}

init();