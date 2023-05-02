//01-oddNumbers function
console.log("Taks 01");

// TODO: Implement the oddNumbers function
function oddNumbers(para1, para2) {
  let relsult = [];
  for (let number = para1; number <= para2; number++) {
    if (number % 2 !== 0 && number >= 0) {
      relsult.push(number);
    }
  }
  return relsult.join(",");
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//02-charCount function
console.log("Taks 02");

// TODO: Implement the charCount function
function charCount(word, chara) {
  let count = 0;
  for (let index = 0; index <= word.length; index++) {
    const currentChara = word.toLowerCase()[index];
    if (chara.length >= 2) {
      break;
    } else if (currentChara === chara.toLowerCase()) {
      count += 1;
    }
  }
  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
