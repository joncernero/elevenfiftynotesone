/*
SCOPE
1-grammarAndTypes
    03-Scope.js
*/

/* 
What is scope?

JS has both Local and Global scope
*/

// example 1
var x = 12;

function scope(){
    var x = 33;
    var y = 10;
    console.log(x);
}

scope(); //logs 33
// console.log(y); // only exists in the function (local)
console.log(x); // logs 12

//example 2 
var x = 12;

function scope(){  
    x = 33;
    console.log(x);
}

scope()
console.log(x);


//example 3 
var x = 1;

function scope(){
    var x = 2;
    function scopeInner(){
        var x = 3;
        console.log(x);
    }
    scopeInner();
    console.log(x);
}
scope();
console.log(x);

//example 4 constrasts with 5:
var x = 12;

function scope(){
    var x = 33;
    if (true){
        let x = 45;
        console.log(x); //45
    }
    console.log(x); //33
}

scope();
console.log(x); //12

//example 5 constrast with 4
var x = 12;

function scope(){
    var x = 33;
    if (true){
        var x = 45;
        console.log(x); // 45
    }
    console.log(x); //45 -> var doesn't obey 'block' scope
}

scope();
console.log(x);