console.log("app.js is ready");

// Array
let array = [1,2,3,4,5];

// Creating an Empty Array with a constructor
let emptyArray = new Array();
console.log(`Empty Array: ${emptyArray}`);
emptyArray.push(24);
console.log(`Non Empty Array: ${emptyArray}`);

// Creating an Int Array with a constructor
let intArray = new Array(10,20,30,40,50);
console.log(`Int Array: ${intArray}`);
console.log(`Int Array Object: `, intArray);

// Create Test Array
let testArray = new Array(10);
console.log(`Test Array: ${testArray}`)

// Push to Test Array
testArray.push(80);
console.log(`Test Array: ${testArray}`)

// Tuesday Array
let tuesdayArray = new Array(10).fill("Tuesday!");
console.log(`Class is on ${tuesdayArray}`);

function square(x) {
    return x * x;
}

let nums = new Array(1, 5, 10, 7);
let squaredNums = nums.map(num => {
    return square(num);
})
console.log(squaredNums);