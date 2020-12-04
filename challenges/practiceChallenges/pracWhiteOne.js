// WHITEBOARDING PRACTICE CHALLENGES

// COUNTING SUM CHALLENGE

/*
Write a function that adds together all the numbers between any two numbers. 
Your function will accept two parameters. One for the starting number and another for the ending number.
console.log the final sum of the numbers
*/

countingSum(1,100) // = 5050
countingSum(35,77) // = 2408
countingSum(234,567) // = 133767

function countingSum(num1, num2) {
   let sum = (Math.round(num1-num2-1)/2);
   let positivePair = Math.abs(sum);
   console.log((num1+num2)*positivePair);
}
countingSum(1,100);
countingSum(35,77);
countingSum(234, 567);

function countingSum(num1,num2){
   let sum = 0;
      for (let i = num1; i <= num2; i++){
         sum += i;
}
  console.log(sum);
}

countingSum(1,100);
countingSum(35,77);
countingSum(234,567);