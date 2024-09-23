// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// TODO: Create an array of questions for user input
// const questions = [];

// console.log(prompt),
// TODO: Create a function to write README file
function writeToFile(data) {
  return `
  
  
  `;
}

// TODO: Create a function to initialize app
function init(prompt) {
  inquirer
    .prompt([
      { name: " fileName", type: "input", message: "What is your file name?" },
      {
        name: "motivation",
        type: "input",
        message: "What is your motivation?",
      },
      {
        name: "motivation",
        type: "input",
        message: "Why did you build this project?",
      },
      { name: "problems", type: "input", message: "What problems does it ?" },
      { name: "learning", type: "input", message: "What did you learn?" },

      {
        name: " Description",
        type: "input",
        message: "What the description of your project?",
      },
      {
        name: " Installation",
        type: "input",
        message: "What are the steps required to install your project? ",
      },
      {
        name: " Usage",
        type: "input",
        message: "Provide instructions and examples for use.",
      },

      {
        name: " Credits",
        type: "input",
        message: "List of all your collaborators.",
      },
      {
        name: " License",
        type: "list",
        message: "What type of License will you be using?",
      },
    ])
    .then((data) => {
      fs.writeFile("README.md"),
        (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("good job");
          }
        };
    });
}
// console.log(data));
// Function call to initialize app
init();
