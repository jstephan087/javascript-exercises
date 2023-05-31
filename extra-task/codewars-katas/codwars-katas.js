//Solutions for Codewars Katas##

//Counting Sheep

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}

//Opposite Number

function opposite(number) {
  return -number;
}

//Sum of positive

function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}

//Return Negative

function makeNegative(num) {
  return num < 0 ? num : -num;
}

//alternate solution

function makeNegative(num) {
  return -Math.abs(num);
}

//Number of People in the Bus

var number = function (busStops) {
  let count = 0;
  busStops.forEach((passanger) => {
    count = count + passanger[0] - passanger[1];
  });
  return count;
};

//alternate solutions
const number = (busStops) => busStops.reduce((p, n) => p + n[0] - n[1], 0);

const number = (busStops) => busStops.reduce((n, [on, off]) => n + on - off, 0);

//Reversed Strings

function reverseString(str) {
  return str.split("").reverse().join("");
}

//alternate solutions
function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}

function reverseString(str) {
  return str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
}

//Even Numbers in Array

function evenNumbers(array, number) {
  let even = [];
  array.forEach((num) => {
    if (num % 2 === 0) {
      even.push(num);
    }
  });
  return even.slice(-number);
}

//alternate solution
const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);

//Get the Middle Character

function getMiddle(s) {
  return s.substring(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
}

//alternate solution

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

//outdated solution

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//Isograms

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

//Regex solution

function isIsogram(str) {
  const strArr = str
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .match(/(.)\1+/g);

  if (strArr !== null) {
    return false;
  } else {
    return true;
  }
}

//Vowel Count

function getCount(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((x) => "aeiou".includes(x)).length;
}

//Regex solution

function getCount(str) {
  let count = str.match(/[aeiou]/gi);
  return count === null ? 0 : count.length;
}

/////////////////////////////////#BONUS KATAS#////////////////////////////////////

//String Repeat

function repeatStr(n, s) {
  return s.repeat(n);
}

//Descending Order

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

//Mumbling

function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((element, index) => element.toUpperCase() + element.repeat(index))
    .join("-");
}

//Credit Card Mask

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

//Remove first and last letter

function removeChar(str) {
  return str.slice(1, -1);
}

//Highest and Lowest

function highAndLow(numbers) {
  numbers = numbers.split(" ").map((x) => x * 1);
  return Math.max(...numbers) + " " + Math.min(...numbers);
}

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
