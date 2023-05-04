// Desafio 11
// eslint-disable-next-line max-lines-per-function
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  const count = array.reduce((acc, num) => {
    if (num in acc) {
      acc[num] += 1;
    } else {
      acc[num] = 1;
    }

    if (acc[num] > acc.mostFreq) {
      acc.mostFreq = acc[num];
      acc.mostFreqNum = num;
    }
    return acc;
  }, { mostFreq: -Infinity });

  if (Math.max.apply(null, array) > 9 || Math.min.apply(null, array) < 0 || count.mostFreq >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return !(lineA + lineB < lineC || lineA + lineC < lineB || lineB + lineC < lineA || Math.abs(lineB - lineC) > lineA || Math.abs(lineA - lineC) > lineB || Math.abs(lineB - lineA) > lineC);
}

// Desafio 13
function hydrate(str) {
// Extract all integers from the string
  let integers = str.match(/\d+/g).map(Number);

  const total = integers.reduce((a, c) => a + c);

  return total > 1 ? `${total} copos de água` : `${total} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
