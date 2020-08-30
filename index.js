const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
	{
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?',
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
	},
	{
		type: 'input',
		name: 'URL to Project',
		message: 'the URL to your project?',
	},
	{
		type: 'input',
		name: 'title',
		message: "What is your project's name?",
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please write a short description of your project',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What kind of license should your project have?',
		choices: [
			{
				name: 'Apache 2.0 License',
				value: {
					name: 'Apache 2.0 License',
					link: 'License-Apache%202.0',
					url: 'https://opensource.org/licenses/Apache-2.0',
					color: 'blue',
				},
			},
			{
				name: 'MIT',
				value: {
					name: 'MIT',
					link: 'MIT',
					url: 'https://opensource.org/licenses/MIT',
					color: 'yellow',
				},
			},
			{
				name: 'GPL 3.0',
				value: {
					name: 'GPL 3.0',
					link: 'GPLv3',
					url: 'https://www.gnu.org/licenses/gpl-3.0',
					color: 'blue',
				},
			},
			{
				name: 'BSD 3',
				value: {
					name: 'BSD 3',
					link: 'License-BSD%203--Clause',
					url: 'https://opensource.org/licenses/BSD-3-Clause',
					color: 'orange',
				},
			},
			{
				name: 'Unlicense',
				value: {
					name: 'Unlicense',
					link: 'Unlicense',
					url: 'http://unlicense.org/',
					color: 'blue',
				},
			},
		],
	},
	{
		type: 'input',
		name: 'installation',
		message: 'What command should be run to install dependencies?',
		default: 'npm i',
	},
	{
		type: 'input',
		name: 'test',
		message: 'What command should be run to run tests?',
		default: 'npm test',
	},
	{
		type: 'input',
		name: 'usage',
		message: 'What does the user need to know about using the repo?',
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'What does the user need to know about contributing to the repo?',
	},
];
//return fs.writeFileSync(path.join(process.cwd(), fileName), data);

function writeFs(fileName, data) {
  return writeFileAsync(fileName, data);
}

function init() {
	inquirer.prompt(questions).then(answers => {
    console.log(answers);
		writeFs("README.md", generateMarkdown(answers));
	});
}

init();
