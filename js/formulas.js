function addition(num1, num2) {
  
return num1 + num2 ;

}
function subtraction(num1, num2){
return num1 - num2 ;
}

function multiplication(num1, num2){
  return num1 * num2;
}

function division(num1, num2){

  return num1 / num2 ;
}

// Area formulaas
function areaSquare(side){
  
  return side**2;
}

function areaRectangle(length, width){
  return length * width;


}

function areaParallelogram(base, height){
  return base * height;
}

function areaTriangle(base, height){
  return base * height / 2; 
}

function Circle(radius){
  return Math.PI * radius**2;
}

function Sphere(radius){
  return 4 * Math.PI * radius**2; 
}

// Surface Area formulas
function surfaceAreaCube(side){
  return 6 * side * side ;
}

function surfaceAreaCylinder(radius, height){
  return (4 * Math.PI * radius * height) * (2 * Math.PI * radius**2);
}

// Perimeter formulas
function perimeterSquare(side){
  return side + side + side + side;
}

function perimeterRectangle(length, height){
  return length + height + length + height;
}

function perimeterTriangle(side1, side2, side3){
  return side1 + side2 + side3;
}

function perimeterCircle(diameter){
  return Math.PI * diameter;
}

// Volume formulas
function volumeCube(side){
  return side**3;
}

function volumeRectangular(length, width, height){
  return length * width * height;
}

function volumeCylinder(radius, height){
  return Math.PI * radius**2 * height;
}
