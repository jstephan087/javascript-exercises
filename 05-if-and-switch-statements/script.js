// 01-Spot the errors and fix them
console.log("Taks 01");

const size = 25;
let result;

if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//02-oddEven function
console.log("Taks 02");

// TODO: Implement the oddEven function

function oddEven(number) {
  let resultOddEven;
  if (number % 2 == 0) {
    resultOddEven = "even";
  } else {
    resultOddEven = "odd";
  }
  return resultOddEven;
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

//03-oldYoung function
console.log("Taks 03");

// TODO: Implement the oldYoung function

function oldYoung(age) {
  let resultAge;
  if (age < 16 && age >= 0) {
    resultAge = "children";
  } else if (age < 50 && age >= 16) {
    resultAge = "young person";
  } else if (age < 0 || typeof age == "string") {
    resultAge = "invalid parameter";
  } else {
    resultAge = "elder person";
  }
  return resultAge;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
