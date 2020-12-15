// basic Math 

let points = 10;
let xpoints = 7;

points += xpoints;
console.log(points);

let donuts = 30; 
let ateDonuts = 10; 
 
donuts -= ateDonuts;
console.log(donuts);




function addition(a, b ){
    return a + b; 
}

function subtraction(){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division( a, b){
    return a / b;
}

//Area 

let side = 4;
function areaSquare(side){
    return  Math.pow(4, 2);
}

function areaRectangle(length, width){
    return length * width; 

}

function areaParallelogram(base, height){
    return base * height;
}

function areaTriangle(base, height){
    return  (base * height) / 2; 


}

function areaCircle(radius){
    return Math.PI * (radius * radius);

}

function areaSphere(radius){
    return 4 * Math.PI * (math.pow(radius, 2));

}

// surface area 
let side = 4;
function surfaceAreaCube(side){
    return 6 * Math.pow(side, 2);
}

function surfaceAreaCylinder(PI, radius, height){
    return 2 * Math.PI * (radius * height);

}

// Perimeter

function perimeterSquare(side){
    return  4 * side;
}

function perimeterRectangle(length, width){
    return  2 * length + 2 * width;
}

function perimeterTriangle(side, side, side){
    return  side * 1 + side * 2 + side * 3; 


}

function perimeterCircle(PI, diameter){
    return  Math.PI * diameter;
}

// volume 

function volumeCube(side){
    return Math.pow(side, 3);
}

function volumeRectangularContainer(length, width, height){
    return length * width * height;
}

function volumeCylinder(radius, height){
    return Math.PI * Math.pow(radius, 2) * height; 
}