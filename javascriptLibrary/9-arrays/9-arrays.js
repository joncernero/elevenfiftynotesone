/*
ARRAYS
*/ 

//what is an array?

//has [] brackets
//can hold multiple datatypes 
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys: 0            1           2     3     4    5      6
// console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
// console.log(students instanceof Array); //instanceof tells me my array is an array
// // console.log(students[2]);
// console.log(strudnets[1]);
// console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop

// // let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// for (f of food){
//     console.log(f+ ' is amazing!');

//}

//array methods (MDN DOCS-Mozilla Documentation Network) - built in functions of javascript that we can use as long as we have the appropriate type 

// food.push('Pizza'); //.push let's us add elements to an array that already exists
// console.log(food);

// food.splice(1, 1, "Bananas"); //aasks for an insertion point, how many things to remove, then the item or items to
// console.log(food);

// food.splice(2, 0, "Sweet Potato Pie");
// console.log(food);

// food.pop(); // removes the last element of an array
// console.log(food);

// food = food.slice(2,4); // the first number is the first element to slice from the array, while the second number is the stop position (not ///to be included)
// console.log(food);


//forEach allows us to iterate with loops specificially, and we can directly grab both the elements 
// and their index numbers


let food = ['Pecan Pie','Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//food.forEach((f) => console.log(f));

food.forEach((food, index) => {
   console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

//let's do the following with an array:
// we will check if we are working with an array
// flip the values within the array (what was in index 4 in 0,3,to1,etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);
//console.log(arr, arr instanceof Array);

if(arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}





