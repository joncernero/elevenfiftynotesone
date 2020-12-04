//Gumball Machine

function gumBallMachine(coin){
    if (coin === 'quarter'){
    return 'Gumball';
} else { 
    return 'Please insert a quarter.';
}
}
console.log(gumBallMachine('quarter'));

// Coin Flip
//Write a function called coinFlip. When invoked, the function should print either 'heads or 'tails
//Use Math.rando() to write a conditional.

console.log(Math.random());

function coinFlip(){
    let randomNum = Math.round(Math.random());
    if (randomNum === 1){
        console.log("heads");
    } else {
        console.log("tails");
    }
}

coinFlip();
