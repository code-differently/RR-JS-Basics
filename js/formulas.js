// Basic math formulaas
function addition(num1, num2){
  return num1 + num2;
}
//let sum = addition(23, 47);
//console.log (sum);

function subtraction(num1, num2){
  return num1 - num2;
}
//let sum = subtraction(23, 47);
//console.log (sum);

function multiplication(num1, num2){
  return num1 * num2;
}
//let sum = multiplication(23, 47);
//console.log (sum);

function division(num1, num2){
  return num1 / num2;
}
//let sum = division(23, 47);
//console.log (sum);



// Area formulaas
function areaSquare(side){
  return side * side;
}
//let side = areaSquare(2);
//console.log (side);


function areaRectangle(length, width){
  return length * width;
}
 // let area = areaRectangle(25, 75);
  //console.log (area);


function areaParallelogram(base, height){
  return base * height;
}

function areaTriangle(base, height){
  return (base * height) / 2;
}

function Circle(radius){
  return Math.pow(radius, 2) * Math.PI;
}

function Sphere(radius){
  return 4 * Math.PI * Math.pow(radius, 2);
}

// Surface Area formulas
function surfaceAreaCube(side){
  return 6 * Math.pow(side, 2);
}

function surfaceAreaCylinder(radius, height){
  return 2 * Math.PI * radius * height;
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
  return Math.PI * diameter;
}

// Volume formulas
function volumeCube(side){
  return -1;
}

function volumeRectangular(length, width, height){
  return -1;
}

function volumeCylinder(radius, height){
  return -1;
}
