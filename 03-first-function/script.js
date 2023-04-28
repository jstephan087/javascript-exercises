// TODO: implement welcomeMsg function

// 01-Greet function
console.log("Task 01");

function welcomeMsg(name) {
  return name;
}

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

//02-Gross Price Function
console.log("Task 02");

// TODO: implement calcGrossPrice function

function calcGrossPrice(integerNo, floatNo) {
  return (integerNo * (1 + floatNo)).toFixed(1);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

//03) Add Positive Function
console.log("Task 03");

// TODO: Implement the addPositive function

function addPositive(numberOne, numberTwo) {
  return Math.abs(numberOne) + Math.abs(numberTwo);
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
