// Basic math formulaas
function addition(num1, num2){
  let sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2){
  let sum = num1 - num2;
  return sum;
}

function multiplication(num1, num2){
  let multiplication = num1 * num2;
  return multiplication;
}

function division(num1, num2){
  let division = num1 / num2;
  return division;
}

// Area formulaas
function areaSquare(side){
  let areaSquare = side * side;
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
  let areaTriangle = base * height/2;
  return areaTriangle;
}

function Circle(radius){
  let Circle = 2 * 3.14159 * radius;
  return Circle;
}

function Sphere(radius){
  let Sphere = 1.3333 * 3.1415 * radius;
  return Sphere;
}

// Surface Area formulas
function surfaceAreaCube(side) {
  return 6 * Math.pow(side, 2);
}

function surfaceAreaCylinder(radius, height){
  let surfaceAreaCylinder = 2 * Math.PI * radius * height + 2 *Math.PI * radius * radius;
  return surfaceAreaCylinder;
}

// Perimeter formulas
function perimeterSquare(side){
  let perimeterSquare = 4 * side;
  return perimeterSquare;
}

function perimeterRectangle(length, width){
  let perimeterRectangle = 2(length + width);
  return perimeterRectangle;
}

function perimeterTriangle(side1, side2, side3){
  let perimeterTriangle = side1 + side2 + side3;
  return perimeterTriangle;
}

function perimeterCircle(diameter){
  let perimeterCircle = Math.PI * diameter;
  return perimeterCircle;
}

// Volume formulas

function volumeCube(side){
  let volumeCube = side * side * side;
  return volumeCube;
}

function volumeRectangular(length, width, height){
 let volumeRectangular = length * width * height;
  return volumeRectangular;
}

function volumeCylinder(radius, height){
  let volumeCylinder = Math.PI * Math.pow(radius, 2) * height;
  return volumeCylinder;
}
