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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
