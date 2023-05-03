// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(a, b) {
  let area = (a * b) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  let arr = a.split(' ');
  return arr;
}

// Desafio 4
function concatName(a) {
  return (`${a[a.length - 1]}, ${a[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(a) {
  let maiorNum = a[0];
  let repMaiorNum = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] > maiorNum) {
      maiorNum = a[i];
    }
  }
  for (let i = 0; i < a.length; i += 1) {
    if (maiorNum === a[i]) {
      repMaiorNum += 1;
    }
  }

  return repMaiorNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distcat1 = Math.abs(mouse - cat1);
  let distcat2 = Math.abs(mouse - cat2);
  if (distcat1 === distcat2) {
    return 'os gatos trombam e o rato foge';
  } if (distcat1 > distcat2) {
    return 'cat2';
  } return 'cat1';
}

// Desafio 8
function fizzBuzz(a) {
  let arr = [];
  for (i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (a[i] % 3 === 0) {
      arr.push('fizz');
    } else if (a[i] % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push('bug!');
    }
  }
  return arr;
}

// Desafio 9
function encode(a) {
  let b = '';
  for (i = 0; i < a.length; i += 1) {
    switch (a[i]) {
    case 'a':
      b += 1;
      break;
    case 'e':
      b += 2;
      break;
    case 'i':
      b += 3;
      break;
    case 'o':
      b += 4;
      break;
    case 'u':
      b += 5;
      break;

    default:
      b += a[i];
    }
  }
  return b;
}

function decode(a) {
  let b = '';
  for (i = 0; i < a.length; i += 1) {
    switch (a[i]) {
    case '1':
      b += 'a';
      break;
    case '2':
      b += 'e';
      break;
    case '3':
      b += 'i';
      break;
    case '4':
      b += 'o';
      break;
    case '5':
      b += 'u';
      break;

    default:
      b += a[i];
    }
  }
  return b;
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  // array;
  const newArray = array.sort().map((tech) => (
    { tech, name }
  ));
  return newArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,

};
