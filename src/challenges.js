// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else return false
}

// Desafio 2
function calcArea(a, b) {
  let area = (a * b) / 2
  return area
}

// Desafio 3
function splitSentence(a) {
  let arr = a.split(" ")
  return arr
}

// Desafio 4
function concatName(a) {
  return (a[a.length-1]+", " + a[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties
  return pontos
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
