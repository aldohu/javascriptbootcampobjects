let num = 103.941;

//to fixed


console.log(num.toFixed(2));


//round

console.log(Math.round(num));

console.log(Math.floor(num));

console.log(Math.ceil(num));


let min = 10;
let max = 20;

let randomNum = Math.floor((Math.random() * (max-min+1))) + min;

const makeGuess = function(min,max, guess){
    return guess ===Math.floor((Math.random() * (max-min+1))) + min;
}


console.log(makeGuess(1,5,3));
 