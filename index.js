const fs = require('fs');
const inquirer = require('inquirer');

const { circle, triangle, square } = require('./lib/shapes');

function writeToFile(fileName, answers) {
    let svgString = "",
    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `{answers.shape}`;

    let shapeChoice;
    if (answers.shape === "circle") {
        shapeChoice = new circle();
        svgString += `<circle cx="150" cy="125" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "triangle") {
        shapeChoice = new triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else (answers.shape === "square"){
        shapeChoice = new square();
        svgString += `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${answers.shapeBackgroundColor}"/>`;
    }
}


