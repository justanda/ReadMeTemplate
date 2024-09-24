// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// TODO: Create a function to write README file
function writeToFile(data) {
  return `
  # ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.License})
## Description

${data.Description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Features](#features)
- [Collaboration](#collaboration)

## Installation

${data.Installation}

## Usage

${data.Usage}

# Contributor Code of Conduct

${data.Contributors}

## License

${data.License}

## Features

${data.Features}

## Collaboration


GitHub: [${data.GitHub}](https://github.com/${data.GitHub})  

Email: ${data.Email}
  


  `;
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
      },
      {
        name: "Description",
        type: "input",
        message:
          "Provide a short description explaining the what, why, and how of your project.",
      },

      {
        name: "Installation",
        type: "input",
        message: "What are the steps required to install your project?",
      },
      {
        name: "Usage",
        type: "input",
        message: "Provide instructions for testing.",
      },
      {
        name: "Contributors",
        type: "input",
        message: "Whats the guideline for your Contributors",
      },
      {
        name: "License",
        type: "list",
        message: "What type of license will you be using?",
        choices: ["MIT", "APACHE", "GNPL"],
      },
      {
        name: "Features",
        type: "input",
        message: "List the features of your project.",
      },
      {
        name: "GitHub",
        type: "input",
        message: "Whats your GitHub?",
      },
      {
        name: "Email",
        type: "input",
        message: "Whats your Email?",
      },
    ])
    .then((data) => {
      fs.writeFile("README.md", writeToFile(data), (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Congrats! Your README was generated!!");
        }
      });
    });
}

// Function call to initialize app
init();
