// 01-Spot the errors and fix them
console.log("Task 01");

let userName = "Brad";
userName += " Jenna";

function getUserNameLength() {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

//02-isString function
console.log("Task 02");

// TODO: Implement the isString function

function isString(dataType) {
  typeIs = typeof dataType;
  return typeIs == "string";
}

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
