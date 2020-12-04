// setTimeout(()=> console.log('this is a test of timeouts!'), 1000);
let promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure');
        }
    } , 3000);
})

promise // this waiting on 3 seconds as instructed
    .then(success => console.log(success)) //success = 'success'
    .catch(err => console.log(err)); //err ='failure'

// this fires after the above information has been read top => down
console.log('this code is after our promise & .then chain!');

function playFunc(){
    return 5;
}

console.log(playFunc());

//Santa's List
//Boolean declaration
var amIGood = true;

//Promise
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); //fulfilled
        } else {
            var naughty = "you've made Santa's naught list; enjoy your coal! ";
            reject(naughty); // rejected
        }
    }
);


//2nd Promise
var playDate = function(gift){
    var message = "Salutations fellow child I enjoy interacting with! I notice you recieved a posable plastic Batman figurine during the Yultide season. What do yu think of my new" + gift.brand + ' '+ gift.item + '?';

            return Promise.resolve(message);
};

//Promise call 
var checkTwice = function () {
    iCanHasGift
    .then(playDate) // chain here
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: "Salutation fellow child..."
        })
        .catch(function (error){
            // naughty list = coal
            console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};
checkTwice();

