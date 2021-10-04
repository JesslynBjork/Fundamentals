/*
 * Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterThanEq = 5 >= 5;

// Less than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;



let storeA = 4.40;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
   console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.loge("Their prices are equal.")
}


function compareStorePrices (storeA, storeB) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.loge("Their prices are equal.")
}
compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number;
    let subed = number - 19;
}
let squaredNumber = squareNum(10);


let x = 10;

function addNumbers (n, m, x) {
    let b;
    if (1===1){
        let b = 8;
    }
    return n + m;
}
addNumbers(2,3,8);
console.log(x);

//              0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
 //   console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++){
        console.log('j is equal to: ' + j);
    }
}

let x = 0
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}
