function zipStrings(strA, strB) {
  strA = strA.split("");
  strB = strB.split("");
  arr = [strA, strB];
  if (strA.length === 0 && strB.length > 0) {
    return strB.join("");
  }
  if (strA.length >= strB.length) {
    return arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join("")).join("");
  }
  if (strA.length < strB.length) {
    arr = arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join("")).join("");
    const index = strB.length - strA.length;
    const cut = strB.slice(-index, strB.length).join("");
    return arr + cut;
  }
}

zipStrings("a", "b");
