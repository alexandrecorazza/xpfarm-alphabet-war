const alphabetWar = (string) => {
  leftSideScore = 0;
  rightSideScore = 0;

  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }

  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (Object.keys(leftSide).includes(character)) {
      leftSideScore += leftSide[character];
    }
    else {
      rightSideScore += rightSide[character];
    }
  };

  if (leftSideScore === rightSideScore) {
    return "Let's fight again!"
  } 
  else if (leftSideScore > rightSideScore) {
    return "Left side wins!"
  } else {
    return "Right side wins!"
  }
}

console.log(alphabetWar("m"));

module.exports = {
  alphabetWar,
};