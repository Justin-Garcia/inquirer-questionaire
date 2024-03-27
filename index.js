#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet';
import { createSpinner } from 'nanospinner'

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
        message: 'Please enter a project title:',
        default: 'NEW PROJECT',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'BSD', 'Apache 2.0', 'GNU', 'ISC', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username:',
        required: true,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        required: true,
      }
      
];

async function handleAnswers(answers) {
    const spinner = createSpinner('Generating README.md').start();
    await sleep();

    spinner.succeed('README.md Generated Successfully!');
    console.log(answers);
};

function createREADME(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! README.md Created!')
    );
}

function init() {
    inquirer.prompt(questions) 
    .then((answers) => {
        handleAnswers(answers);
        const markdownContent = generateMarkdown(answers);
        createREADME('./README.md', markdownContent);
    });
}


init();