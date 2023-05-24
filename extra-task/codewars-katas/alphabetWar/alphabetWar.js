function alphabetWar(fight) {
  return ["Left side wins!", "Let's fight again!", "Right side wins!"][
    Math.sign(
      [...fight].reduce(
        (count, character) =>
          count + (("wpbs zdqm".indexOf(character) - 4) % 5),
        0
      )
    ) + 1
  ];
}

console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwww"));
