/* ~~Pfingst-Challenge Katas~~ */

//Invert values
function invert(array) {
  return array.map((x) => x * -1);
}

//Find Maximum and Minimum Values of a List
let min = function (list) {
  return Math.min.apply(0, list);
};

let max = function (list) {
  return Math.max.apply(0, list);
};

//Convert a String to a Number!
const stringToNumber = function (str) {
  return Number(str);
};

//Sum The Strings
function sumStr(a, b) {
  return (Number(a) + Number(b)).toString();
}

//Quarter of the year
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

//Remove exclamation marks
function removeExclamationMarks(s) {
  return s.replace(/[!]/g, "");
}

//Check same case
function sameCase(a, b) {
  return /[a-z]/i.test(a) && /[a-z]/i.test(b)
    ? Number(/[a-z]/.test(a) == /[a-z]/.test(b))
    : -1;
}

//Return the day
function whatday(num) {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][num - 1] || "Wrong, please enter a number between 1 and 7"
  );
}

//Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//Who's Online?
const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
  let result = {};

  friends.forEach((element) => {
    if (element.status === "online" && element.lastActivity > 10) {
      element.status = "away";
    }
  });

  friends.forEach((element) => {
    if (element.status === "online") {
      online.push(element.username);
    } else if (element.status === "offline") {
      offline.push(element.username);
    } else if (element.status === "away") {
      away.push(element.username);
    }
  });

  online.length === 0 ? result : (result.online = online);
  offline.length === 0 ? result : (result.offline = offline);
  away.length === 0 ? result : (result.away = away);

  return result;
};

//Weird words
function nextLetter(str) {
  return [...str]
    .map((x) =>
      /[a-yA-Y]/g.test(x)
        ? String.fromCharCode(x.charCodeAt(x) + 1)
        : /[z]/gi.test(x)
        ? x.replace(/[zZ]/g, function (match) {
            if (x === "z") {
              match = "a";
            } else {
              match = "A";
            }
            return match;
          })
        : String.fromCharCode(x.charCodeAt(x))
    )
    .join("");
}

//Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

//Most Likely
function mostLikely(prob1, prob2) {
  let p1 = prob1.split(":");
  let p2 = prob2.split(":");

  return p1[0] / p1[1] > p2[0] / p2[1];
}

//Adding Arrays
function arrAdder(arr) {
  let result = "";
  for (let s = 0; s < arr[0].length; s++) {
    for (let x = 0; x < arr.length; x++) {
      result += arr[x][s];
    }
    result += " ";
  }
  return result.trim();
}

//Simple Fun #198: Cake Slice
function cakeSlice(n) {
  let count = 1;
  for (let i = 1; i <= n; i++) {
    count += i;
  }
  return count;
}
