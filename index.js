// TODO: Import required packages for the application
import inquirer from "inquirer"; // Inquirer is used for user input prompts
import colors from "colors"; // Colors is used for styling console output (not utilized in this code)
import fs from "fs"; // File System module is used for file operations

// TODO: Create a function to generate the README file content
function writeToFile(data) {
  // The 'data' parameter is expected to be an object containing user responses
  return `
  # ${data.title} // Title of the project extracted from the 'title' property of 'data'
![GitHub License](https://img.shields.io/badge/license-${data.License}) // Displays the license badge using the 'License' property

## Description
${data.Description} // Description of the project extracted from the 'Description' property

## Table of Contents 
// Links to different sections of the README for easy navigation
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Features](#features)
- [Collaboration](#collaboration)

## Installation
${data.Installation} // Steps required to install the project from the 'Installation' property

## Usage
${data.Usage} // Instructions for using the project from the 'Usage' property

# Contributor Code of Conduct
${data.Contributors} // Guidelines for contributors from the 'Contributors' property

## License
${data.License} // License type from the 'License' property

## Features
${data.Features} // Features of the project from the 'Features' property

## Collaboration
// Links to GitHub and email for collaboration
GitHub: [${data.GitHub}](https://github.com/${data.GitHub})  
Email: ${data.Email} // Email address from the 'Email' property
  `;
}

// TODO: Create a function to initialize the application
function init() {
  // Use inquirer to prompt the user for project details
  inquirer
    .prompt([
      {
        name: "title", // Variable name for project title input
        type: "input", // Input type indicating user will provide a string
        message: "What is the title of your project?", // Prompt message
      },
      {
        name: "Description", // Variable name for project description
        type: "input",
        message:
          "Provide a concise description explaining the what, why, and how of your project.",
      },
      {
        name: "Installation", // Variable name for installation instructions
        type: "input",
        message: "What are the steps required to install your project?",
      },
      {
        name: "Usage", // Variable name for usage instructions
        type: "input",
        message: "Provide instructions for usage.",
      },
      {
        name: "Contributors", // Variable name for contributor guidelines
        type: "input",
        message: "What are the guidelines for your contributors?",
      },
      {
        name: "License", // Variable name for license selection
        type: "list", // Input type indicating a choice from a list
        message: "What type of license will you be using?",
        choices: ["MIT", "APACHE", "GNPL"], // Available choices for license
      },
      {
        name: "Features", // Variable name for project features
        type: "input",
        message: "List the features of your project.",
      },
      {
        name: "GitHub", // Variable name for GitHub username
        type: "input",
        message: "What is your GitHub username?",
      },
      {
        name: "Email", // Variable name for email address
        type: "input",
        message: "What is your email address?",
      },
    ])
    .then((data) => {
      // Write the generated README content to 'README.md'
      fs.writeFile("README.md", writeToFile(data), (error) => {
        if (error) {
          console.log(error); // Log any errors that occur during the write process
        } else {
          console.log(
            "Congratulations! Your README was successfully generated!"
          ); // Confirm successful file generation
        }
      });
    });
}

//  call function to initialize the application
init(); // Starts the application by invoking the init function
