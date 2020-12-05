// Basic math formulaas
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

// Area formulaas
function areaSquare(side){
  return side * side;
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
  return Math.PI * radius * radius;
}

function Sphere(radius){
  return 4 * Math.PI * radius * radius;
}

// Surface Area formulas
function surfaceAreaCube(side){
  return 6 * side * side;
}

function surfaceAreaCylinder(radius, height){
  return 2 * Math.PI * radius * height + 2 * Math.PI * radius * radius;
}

// Perimeter formulas
function perimeterSquare(side){
  return 4 * side;
}

function perimeterRectangle(length, height){
  return 2 * length + 2 * height;
}

function perimeterTriangle(side1, side2, side3){
  return side1 + side2 +side3;
}

function perimeterCircle(diameter){
  return Math.PI * diameter;
}

// Volume formulas
function volumeCube(side){
  return side * side * side;
}

function volumeRectangular(length, width, height){
  return length * width * height;
}

function volumeCylinder(radius, height){
  return Math.PI * radius * radius * height;
}