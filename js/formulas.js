// Basic math formulaas


//Add
function add(a,b)
{let sum=a + b;
return sum;
}

//Subtract
function subtract(a, b)
{let diff = a - b;
return diff;
}

//Multiply
function product(a,b)
{let prod=a*b;
return prod;
}

//Division
function division(a,b)
{let div=a/b
return div;
}

//Square
function squareArea(s){
	let area = s * s;
	return area
}


//Rectanle Area
function areaRectangle(l,w){
    let RectangleArea = l * w;
     return RectangleArea
                    }
     
//Paralleloragam Area

function parallelogram(b,h){
    let ParallelogramArea = b * h;

    console.log("Area of Parallelogram with base of "+ b + " and height of " + h +  " = " + ParallelogramArea)
}

//Triangle Area
function triangle(b,h){
    let TriangleArea = (b * h)/2;

    console.log("Area of Triangle with base of "+ b + " and height of " + h +  " = " + TriangleArea)
}

//Circle Area
function circle(r){

    // Using 'Math.PI' to get the value of pie
 

    let CircleArea = Math.PI * r * r;

    console.log("Area of Cricle with radius of " + r + " = " + CircleArea)

}

//Sphere Area
function sphere(r){
    let SphereArea = 4 * Math.PI * r * r;

    console.log("Area of Sphere with radius of " + r + " = " + SphereArea)
} 

//Cylinder Area
function cylinderSA(r,h){
    let surfaceArea = 2 * Math.PI * r * h

    console.log("Cylinder (lateral) Surface Area = " + surfaceArea)
}

//Rectangle Perimeter
function rectangleP(l, w){
    let p = (2*l) + (2*w)

    console.log("Rectangle Perimeter = " + p );
}


//Circle Perimeter

function circleP(d){
    let c = Math.PI * d

    console.log("Cirlce Perimeter = " + c)
}



//Rectangular Container Volume
function rectangularContainerVolume(l,w,h){
    let v = l * w * h
    console.log("Volume of Rectangle = " + v)
} 

function cylinderVolume(r, h){

    let v = Math.PI * r * r * h;
    
    console.log("Volume of Cylinder = " + v) 
}


