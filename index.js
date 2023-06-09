// Packages and linking the two JS files.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// A array of question for the user to fill out.
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide what use your project would have in the real world.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to create read.me file.
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
    } else {
      console.log(`Wrote ${fileName}`);
    }
  });
};

// Function to initialize app.
const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    const fileName = 'README.md';
    writeToFile(fileName, markdown);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

// Function call to initialize app.
init();