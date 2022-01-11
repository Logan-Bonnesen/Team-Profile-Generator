const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createTeam = require('./src/generatehtml');
let teamMembers = [];

const managerInfo = function managerInfo(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's ID?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?"
        },

    ]).then(data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber);
        teamMembers.push(manager);
        teamPrompt();
    })
}

function teamPrompt(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamList',
            message: 'Add engineer, intern, or done.',
            choices: ['Engineer', 'Intern', 'Done' ]
        }
    ]).then(data => {
        switch (data.teamList) {
            case 'Engineer':
             engineerInfo()
         break;
         case 'Intern':
             internInfo()
             break;
             default: 
             buildTeam(teamMembers)
        }
    })
}

function engineerInfo(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What is the engineer's GitHub username?"

        }

    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub);
        teamMembers.push(engineer);
        teamPrompt();
        })
}
function internInfo(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"

        }

    ]).then(data => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.school);
        teamMembers.push(intern);
        teamPrompt();;
        });
}

function buildTeam (){
fs.writeFile('index.html', createTeam(teamMembers), (err) => {
    err ? console.error(err) : console.log('Team built successfully.')
},
)}
managerInfo();