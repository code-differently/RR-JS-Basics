// Basic math formulas
function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiplication(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

// Area formulas
function areaSquare(side) {
  return Math.pow(side, 2);
}

function areaRectangle(length, width) {
  return length * width;
}

function areaParallelogram(base, height) {
  return base * height;
}

function areaTriangle(base, height) {
  return (base * height) / 2;
}

function Circle(radius) {
  return Math.pow(radius, 2) * Math.PI; // Math.PI uses the number PI & Math.Pow(X,Y) X to the power of Y
}

function Sphere(radius) {
  return 4 * Math.PI * Math.pow(radius, 2);
}

// Surface Area formulas
function surfaceAreaCube(side) {
  return 6 * Math.pow(side, 2);
}

function surfaceAreaCylinder(radius, height) {
  return 2 * Math.PI * radius * height;
}

// Perimeter formulas
function perimeterSquare(side) {
  return 4 * side;
}

function perimeterRectangle(length, height) {
  return 2 * length + 2 * height;
}

function perimeterTriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

function perimeterCircle(diameter) {
  return Math.PI * diameter;
}

// Volume formulas
function volumeCube(side) {
  return Math.pow(side, 3);
}

function volumeRectangular(length, width, height) {
  return length * width * height;
}

function volumeCylinder(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height;
}
