const fs = require('fs');
const inquirer = require('inquirer');

const { circle, triangle, square } = require('./lib/shapes');


function promptUser(){
    inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters for your logo:"
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter your desired text color (keyword or hexadecimal number):"
        },
        {
            type: "list",
            name: "shape",
            message: "Choose the shape for your desired logo:",
            choices: ["circle", "triangle", "square"]
        },
        {
            type: "input",
            name: "shapeBackgroundColor",
            message: "Choose the color for your shape (keyword or hexadecimal number):"
        },
    ])
    .then((answers)=> {
        if (answers.text.length > 3) {
            console.log("Please enter a value of 3 characters or less");
            promptUser();
        } else {
            writeToFile("./examples/logo.svg", answers);
        }
    })
}

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `{answers.shape}`;

    let shapeChoice;
    if (answers.shape === "circle") {
        shapeChoice = new circle();
        svgString += `<circle cx="150" cy="125" r="60" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "triangle") {
        shapeChoice = new triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "square") {
        shapeChoice = new square();
        svgString += `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${answers.shapeBackgroundColor}"/>`;
    }

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="30" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generate logo.svg");
    })
}

promptUser();