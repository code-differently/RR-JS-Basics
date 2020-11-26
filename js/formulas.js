// Basic math formulaas

function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(5, 7));

function subtraction(num1, num2) {
    return num1 - num2
}
console.log(subtraction(7, 5));

function multiplication(num1, num2) {
    return num1 * num2
}
console.log(multiplication(5, 7));

function division(num1, num2) {
    return num1 / num2
}
console.log(division(6, 3));

// Area formulaas
function areaSquare(side) {
    return side * side
}
console.log(areaSquare(7));

function areaRectangle(length, width) {
    return length * width
}
console.log(areaRectangle(5, 7));

function areaParallelogram(base, height) {
    return base * height
}
console.log(areaParallelogram(5, 7));

function areaTriangle(base, height) {
    return .5 * base * height
}
console.log(areaTriangle(5, 7));

function Circle(radius) {
    return Math.PI * radius * radius
}
console.log(Circle(7));

function Sphere(radius) {
    return 4 * Math.PI * radius * radius
}
console.log(Sphere(7));

// Surface Area formulas
function surfaceAreaCube(side) {
    return 6 * side * side
}
console.log(surfaceAreaCube(7));

function surfaceAreaCylinder(radius, height) {
    return 2 * Math.PI * radius * height
}
console.log(surfaceAreaCylinder(5, 7));

// Perimeter formulas
function perimeterSquare(side) {
    return 4 * side
}
console.log(perimeterSquare(7));

function perimeterRectangle(length, height) {
    return (2 * length) + (2 * height)
}
console.log(perimeterRectangle(5, 7));

function perimeterTriangle(side1, side2, side3) {
    return side1 + side2 + side3
}
console.log(perimeterTriangle(6, 7, 8));

function perimeterCircle(diameter) {
    return Math.PI * diameter
}
console.log(perimeterCircle(7));

// Volume formulas
function volumeCube(side) {
    return side * side * side
}
console.log(volumeCube(7));

function volumeRectangular(length, width, height) {
    return length * width * height
}
console.log(volumeRectangular(6, 7, 8));

function volumeCylinder(radius, height) {
    return Math.PI * radius * radius * height
}
console.log(volumeCylinder(5, 7));