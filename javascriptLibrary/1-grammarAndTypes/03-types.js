/*
TYPES

1-gramarAndTypes
    05-types.js
*/

//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent: true/false, yes/no, on/off, 0/1

//Undefined
/*
Undefined usually means a variable has been declared, but it's not been assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null
/* 
Null means a variable has been declared and assigned a value of null
*/
var empty = null;
console.log(empty);

/* 
Null and undefined both represent variable with no value inside. Think of it this way--null values are for gag gift that are boxes intentionally given with nothing inside (because that's the gag). Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!)*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log (notQuite);

//javaScript isn't great with numbers - if you need outside decimals bring in an outside project - utilize an opensource project?

let numbersAreHard = (0.2 * 10 + 0.1 * 10)/10;
console.log(numbersAreHard);

//Strings
//String is any value within quotes; JS spits out the value within the quotes
let stringOne = 'double quotes';
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatenatin vs addition
let first = 1050 + 100;
let second ='1050' + '100';
console.log(first);
console.log(second);

let third = 1050 +'abcde'; //type coersion
console.log(third);
console.log(typeof third);

//Interpolation 
//lets you use strings with dynamic content (they require backticks)

//Example 1:
let age = 32;
let string = `my age is: ${age}`
console.log(string);

//Objects
/* 
What is an object?

An object is a container that stores property names and their values (it can hold multiple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), separated with a colon, each 
each key is seperated with a comma
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}
console.log(hulk);
console.log(hulk.age);

//Arrays
/*
Arrays store multiple values in a n order way. They, too, hold multiple data types.

Denoted by []
Has valuses ('blue','green','yellow'), seperated by commas
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush','clean toothpaste']
//array indexing                0                   1                   2           3       4
//console.log(stepsToBrushTeeth)
console.log(stepsToBrushTeeth[3]);
console.log(typeof stepsToBrushTeeth);


