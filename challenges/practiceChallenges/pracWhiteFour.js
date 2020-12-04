// Challenge Four

/*
Write a function that takes the array of arrays of numbers and returns a single array with the largest number in each set
*/

findLargestNums([[5,4,1,9],[46,81,19,3],[7,45,1000]]);

function findLargestNums(numberArray){
    let largestNumberArray = [];
    for (let i = 0; i < numberArray.length; i++){
        largestNumberArray.push(Math.max(...numberArray[i]));
    }
    return largestNumberArray;
}

let finalAnswer = findLargestNums([[5,4,1,9],[46,81,19,3],[7,45,1000]]);

console.log(finalAnswer);


function findLargestNums(oldArray){
    let newArray = [];
    for (let index = 0; index < oldArray.length; index++) {
        let maxNum = Math.max(...oldArray[index]);
        newArray.push(maxNum);
    }
    return newArray;
}
console.log(findLargestNums([[5,4,1,9],[46,81,19,3],[7,45,1000]]));