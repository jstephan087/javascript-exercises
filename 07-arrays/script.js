//01-removeItem function
console.log("Task 01");

// TODO: Implement the removeItem function

function removeItem(items, start) {
  let result = [];
  start -= 1;
  const reducedItems = items.slice();
  result = reducedItems.splice(start, 1);
  return reducedItems;
}

const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

//02-sumOfCharacters function
console.log("Task 02");

// TODO: Implement the sumOfCharacters function
function sumOfCharacters(chara) {
  let sum = 0;
  for (let index = 0; index < chara.length; index++) {
    const currentArray = chara[index];
    if (typeof currentArray === "string") {
      sum += currentArray.length;
    } else {
      continue;
    }
  }
  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
