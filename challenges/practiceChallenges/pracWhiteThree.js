/*
Area of a Trapezoid
Write a function that accepts the prameters b1,b2 h
Your function should console.log the area of a Trapezoid
1/2(b1 + b2)h
*/

function areaOfATrapezoid(num1,num2,num3) {
    let area = ((num1 + num2)/2) * num3;
    console.log(area);
}

areaOfATrapezoid(1,2,3);
