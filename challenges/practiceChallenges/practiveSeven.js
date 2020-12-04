//Part 1; Using .map make all of the the letters in the following array upper case.

let instructorNames = ["donovan", "rob", "nav", "kayla", "jason", "marco", "ellie"];

console.log(instructorNames.map(names => names.toUpperCase()));

//PART 2: Create a function that accepts an array of names as a parameter and makes all the letters in the array upper case and console.log the array

function arrayToUpperCase(){
    let upperCaseNames = (arr.map(names => names.toUpperCase()));
    return upperCaseNames;

}

console.log(arrayToUpperCase(instructorNames));