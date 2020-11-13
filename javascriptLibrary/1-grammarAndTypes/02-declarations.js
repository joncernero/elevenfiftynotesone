/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

// What is a variable?
var a = 1;
var b = 2;
console.log(a+b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) JavaScript is case sensitive-- 'hello' and 'Hello' are different variable

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENTS
 */

 /*
 Declarations refer to when we 'declare a variable 

 Initializations refer to when a varible is assigned a value

 Assignment refers to giving a varible a value. This can be after initilization.
 */

 var x;
 console.log('Declaration1:',x);

 x = 10;
 console.log('Initilization 1:',x);

 x = 33;
 console.log('Assignment 1:', x);

 var y;
 console.log(y);

 y = 'hello';
 console.log(y);

 y = 'you are my friend';
 console.log(y);

/*
Var, Let, and Const:

Var= 'old' keyword for varibles
Let= 'new' keyword for varibles (introduced with ES6
Const = also 'new', declares unchange varibles
*/

let tonight = 'great!'; 
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty = 'Super!';


