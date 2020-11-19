// Basic math formulaas
function addition(num1, num2){
  let sum = 0;
  sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2){
  let subtract = 0;
  subtract = num1 - num2;
  return subtract;
}

function multiplication(num1, num2){
  let multiply = 0;
  multiply = num1 * num2;
  return multiply;
}

function division(num1, num2){
  let divide = 0;
  divide = num1 / num2;
  return divide;
}

// Area formulaas
function areaSquare(side){
  let a = 0;
  a = side * side;
  return a;
}

function areaRectangle(length, width){
  let a = 0;
  a = length * width;
  return a;
}

function areaParallelogram(base, height){
  a = 0;
  a = base * height;
  return a;
}

function areaTriangle(base, height){
  a = 0;
  a = (1/2) * base * height;
  return a;
}

function Circle(radius){
  a = 0;
  a = Math.PI * radius * radius;
  return a;
}

function Sphere(radius){
  a = 0;
  a = 4 * Math.PI * radius * radius;
  return a;
}

// Surface Area formulas
function surfaceAreaCube(side){
  sa = 0;
  sa = 6 * side * side;
  return sa;
}

function surfaceAreaCylinder(radius, height){
  sa = 0;
  sa = 2 * Math.PI * radius * height
  return sa;
}

// Perimeter formulas
function perimeterSquare(side){
  p = 0;
  p = 4 * side;
  return p;
}

function perimeterRectangle(length, height){
  p = 0;
  p = (2 * length) + (2 * height);
  return p;
}

function perimeterTriangle(side1, side2, side3){
  p = 0;
  p = side1 + side2 + side3;
  return p;
}

function perimeterCircle(diameter){
  p = 0;
  p = Math.PI * diameter;
  return p;
}

// Volume formulas
function volumeCube(side){
  v = 0;
  v = side * side * side;
  return v;
}

function volumeRectangular(length, width, height){
  v = 0;
  v = length * width * height;
  return v;
}

function volumeCylinder(radius, height){
  v = 0;
  v = Math.PI * radius * radius * height;
  return v;
}
