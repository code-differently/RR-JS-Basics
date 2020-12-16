// Basic math formulaas
function addition(num1, num2){
  const sum = num1 + num2;
  return sum;
}

function subtraction(num1, num2){
  const diff = num1 - num2;
  return diff;
}

function multiplication(num1, num2){
  const product = num1 * num2;
  return product;
}

function division(num1, num2){
  const quotient = num1 / num2;
  return quotient;
}

// Area formulaas
function areaSquare(side){
  const area = side * side;
  return area;
}

function areaRectangle(length, width){
  const area = length * width;
  return area;
}

function areaParallelogram(base, height){
  const area = base * height;
  return area;
}

function areaTriangle(base, height){
  const area = .5 * base * height;
  return area;
}

function Circle(radius){
  const area = Math.PI * radius;
  return area;
}

function Sphere(radius){
  const s = 4 * Math.PI * radius * radius;
  return s;
}

// Surface Area formulas
function surfaceAreaCube(side){
  const surfaceArea = side * side * 6;
  return surfaceArea;
}

function surfaceAreaCylinder(radius, height){
  const surfaceArea = 2 * Math.PI * radius * height;
  return surfaceArea;
}

// Perimeter formulas
function perimeterSquare(side){
  const perimeter = 4 * side;
  return perimeter;
}

function perimeterRectangle(length, height){
  const perimeter = 2 * length + 2 * height;
  return perimeter;
}

function perimeterTriangle(side1, side2, side3){
  const perimeter = side1 + side2 + side3;
  return perimeter;
}

function perimeterCircle(diameter){
  const perimeter = Math.PI * diameter;
  return perimeter;
}

// Volume formulas
function volumeCube(side){
  const volume = side * side * side;
  return volume;
}

function volumeRectangular(length, width, height){
  const volume = length * width * height;
  return volume;
}

function volumeCylinder(radius, height){
  const volume = Math.PI * radius * radius * height;
  return volume;
}
