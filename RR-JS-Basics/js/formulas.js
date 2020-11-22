// Basic math formulaas
function addition(num1, num2){
  let sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2){
  let difference = num1 - num2;
  return difference;
}

function multiplication(num1, num2){
  let product = num1 * num2;
  return product;
}

function division(num1, num2){
  let quotient = num1 / num2;
  return quotient;
}

// Area formulaas
function areaSquare(side){
  let areaSquare = Math.pow(side, 2);
  return areaSquare;
}

function areaRectangle(length, width){
  let areaRectangle = length * width;
  return areaRectangle;
}

function areaParallelogram(base, height){
  let areaParallelogram = base * height;
  return areaParallelogram;
}

function areaTriangle(base, height){
  let areaTriangle = (1/2) * base * height;
  return areaTriangle;
}

//Did not use Math.PI because it resulted in slightly different numbers from using 3.14 on the directions page.
function Circle(radius){
  let Circle = Math.pow(radius, 2) * 3.14;
  return Circle;
}

function Sphere(radius){
  let Sphere = 4 * 3.14 * Math.pow(radius, 2);
  return Sphere;
}

// Surface Area formulas
function surfaceAreaCube(side){
  let areaCube = Math.pow(side, 2) * 6;
  return areaCube;
}

function surfaceAreaCylinder(radius, height){
  let = areaCylinder = 2 * 3.14 * radius * height;
  return areaCylinder;
}

// Perimeter formulas
function perimeterSquare(side){
  let perimeterSquare = 4 * side;
  return perimeterSquare;
}

function perimeterRectangle(length, height){
  let perimeterRectangle = (2 * length) + (2 * height);
  return perimeterRectangle;
}

function perimeterTriangle(side1, side2, side3){
  let perimeterTriangle = side1 + side2 +side3;
  return perimeterTriangle;
}

function perimeterCircle(diameter){
  let perimeterCircle= 3.14 * diameter;
  return perimeterCircle;
}

// Volume formulas
function volumeCube(side){
  let volumeCube = Math.pow(side, 3);
  return volumeCube;
}

function volumeRectangular(length, width, height){
  let volumeRectangular = length * width * height;
  return volumeRectangular;
}

function volumeCylinder(radius, height){
  let volumeCylinder = 3.14 * Math.pow(radius, 2) * height;
  return volumeCylinder;
}
