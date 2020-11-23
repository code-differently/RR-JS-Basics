//Values

// let num1 = Number(prompt("Enter a number:"));
// let num2 = Number(prompt("Enter a second number:"));
//let side = Number(prompt("How long is a side of the square?"));
// let length = Number(prompt("What is the length?"));
// let width = Number(prompt("What is the width?"));
// let base = Number(prompt("What is the length of the base?"));
// let height = Number(prompt("What is the height?"));
//let radius = Number(prompt("What is the radius?"));
// let side1 = Number(prompt("How long is the first side?"));
// let side2 = Number(prompt("How long is the second side?"));
// let side3 = Number(prompt("How long is the third side?"));
//let diameter = Number(prompt("What is the diameter?"));

let num1 = 4;
let num2 = 5;
let side = 6;
let length = 8;
let width = 12;
let base = 9;
let height = 5;
let radius = 10;
let π = Math.PI;
let side1 = 2;
let side2 = 7;
let side3 = 3;
let diameter = 15;

// Basic math formulas

function addition(num1, num2){
  return num1 + num2;
}

function subtraction(num1, num2){
  return num1 - num2;
}

function multiplication(num1, num2){
  return num1 * num2;
}

function division(num1, num2){
  return num1 / num2;
}

// Area formulas

function areaSquare(side){
  return Math.pow(side, 2);
}

function areaRectangle(length, width){
  return length * width;
}

function areaParallelogram(base, height){
  return base * height;
}

function areaTriangle(base, height){
  return (1/2) * base * height;
}

function Circle(radius){
  return π * Math.pow(radius, 2);
}

function Sphere(radius){
  return 4 * π * Math.pow(radius, 2);
}

// Surface Area formulas
function surfaceAreaCube(side){
  return 6 * Math.pow(side, 2);
}

function surfaceAreaCylinder(radius, height){
  return 2 * π * radius * height;
}

// Perimeter formulas
function perimeterSquare(side){
  return 4 * side;
}

function perimeterRectangle(length, height){
  return (2 * length) + (2 * height);
}

function perimeterTriangle(side1, side2, side3){
  return side1 + side2 + side3;
}

function perimeterCircle(diameter){
  return π * diameter;
}

// Volume formulas
function volumeCube(side){
  return Math.pow(side, 3);
}

function volumeRectangular(length, width, height){
  return length * width * height;
}

function volumeCylinder(radius, height){
  return π * Math.pow(radius, 2) * height;
}
